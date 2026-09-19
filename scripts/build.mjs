import fs from 'node:fs';
import path from 'node:path';
import MarkdownIt from 'markdown-it';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
export function escapeHTML(value) {return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
export function documentLink(href,base) {
 if (/^[A-Za-z-]+\.md(?:#.*)?$/.test(href)) {
  const [name,hash]=href.split('#');return base+'/'+(name==='Home.md'?'':name.slice(0,-3)+'/')+(hash?'#'+hash:'');
 }
 if (/^(diagrams|reference)\/[A-Za-z0-9_.-]+$/.test(href))return base+'/'+href;
 return href;
}
export function renderMarkdown(source,base) {
 const md=new MarkdownIt({html:false,linkify:false,typographer:false});
 const originalLink=md.renderer.rules.link_open||((tokens,i,options,env,self)=>self.renderToken(tokens,i,options));
 md.renderer.rules.link_open=(tokens,i,options,env,self)=>{tokens[i].attrSet('href',documentLink(tokens[i].attrGet('href')||'',base));return originalLink(tokens,i,options,env,self)};
 const image=md.renderer.rules.image;
 md.renderer.rules.image=(tokens,i,options,env,self)=>{
  const src=tokens[i].attrGet('src')||'';
  if(!/^diagrams\/[a-z-]+\.svg$/.test(src))throw Error('Unexpected wiki image source');
  const href=documentLink(src,base);tokens[i].attrSet('src',href);tokens[i].attrSet('loading','lazy');
  return '<a class="diagram" href="'+escapeHTML(href)+'">'+image(tokens,i,options,env,self)+'<span>Open full-size diagram</span></a>';
 };
 md.renderer.rules.table_open=()=>'<div class="table-scroll" tabindex="0" role="region" aria-label="Scrollable documentation table"><table>';
 md.renderer.rules.table_close=()=>'</table></div>';
 md.renderer.rules.heading_open=(tokens,i,options,env,self)=>{const slug=tokens[i+1].content.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');tokens[i].attrSet('id',slug);return self.renderToken(tokens,i,options)};
 return md.render(source);
}
export function build() {
 const config=JSON.parse(fs.readFileSync('site.config.json','utf8')),current=JSON.parse(fs.readFileSync('generated/current.json','utf8'));
 if(!/^[a-f0-9]{40}$/.test(current.sourceRevision))throw Error('Invalid application revision');
 const base=config.basePath;
 fs.rmSync('dist',{recursive:true,force:true});fs.mkdirSync('dist',{recursive:true});
 fs.cpSync('assets','dist/assets',{recursive:true});fs.cpSync('diagrams','dist/diagrams',{recursive:true});fs.cpSync('reference','dist/reference',{recursive:true});
 for(const [id,title] of config.chapters) {
  const source=fs.readFileSync('pages/'+id+'.md','utf8');
  const nav=config.chapters.map(([key,label])=>`<a href="${base}/${key==='Home'?'':key+'/'}" ${key===id?'aria-current="page"':''}>${escapeHTML(label)}</a>`).join('\n');
  const canonical=config.url+'/'+(id==='Home'?'':id+'/');
  const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#17130d"><meta name="description" content="KubeQuest documentation: Kubernetes learning, CKAD labs, architecture, UML diagrams, operations and automated delivery."><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; object-src 'none'; base-uri 'self'"><link rel="canonical" href="${canonical}"><title>${escapeHTML(title)} · KubeQuest wiki</title><link rel="stylesheet" href="${base}/assets/style.css"><script defer src="${base}/assets/navigation.js"></script></head><body><a class="skip" href="#main">Skip to content</a><header><a class="wordmark" href="${base}/">kubequest<span>.</span> <small>wiki</small></a><nav aria-label="Site navigation"><a href="${config.portal}">Learning portal ↗</a><a href="${config.repository}">Wiki on GitHub ↗</a></nav></header><div class="layout"><aside><label for="chapter-search">Find a chapter</label><input id="chapter-search" type="search" placeholder="Search chapter titles" autocomplete="off"><nav class="chapters" aria-label="Wiki chapters">${nav}</nav><p class="nav-empty" hidden>No matching chapters.</p></aside><main id="main"><div class="release-note">Live application: <a href="https://github.com/ramideltoro/kubequest/commit/${current.sourceRevision}">${current.sourceRevision.slice(0,7)}</a> · <a href="${base}/Current-release/">Release reference</a></div><article>${renderMarkdown(source,base)}</article><p class="edit"><a href="${config.repository}/blob/main/pages/${id}.md">View this page on GitHub ↗</a></p></main></div><footer><nav aria-label="Footer navigation"><a href="${config.portal}">KubeQuest</a><a href="${base}/">Wiki home</a><a href="${base}/UML-diagrams/">UML diagrams</a><a href="${config.repository}">Source</a><a href="${config.repository}/actions">Publishing</a></nav><p>© ${new Date().getUTCFullYear()} <a href="https://www.ramideltoro.com">Rami Del Toro</a> · All Rights Reserved.</p></footer></body></html>`;
  const target='dist/'+(id==='Home'?'':id+'/');fs.mkdirSync(target,{recursive:true});fs.writeFileSync(target+'index.html',html);
 }
 const wikiRevision=process.env.GITHUB_SHA||execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
 fs.writeFileSync('dist/release.json',JSON.stringify({sourceRevision:current.sourceRevision,wikiRevision,sourceRun:current.sourceRun,generatedAt:current.generatedAt},null,2)+'\n');
 fs.writeFileSync('dist/.nojekyll','');
 fs.writeFileSync('dist/404.html',`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found · KubeQuest wiki</title><link rel="stylesheet" href="${base}/assets/style.css"><main class="not-found"><h1>This wiki page has moved.</h1><p><a href="${base}/">Open the wiki index</a> or <a href="${config.portal}">return to KubeQuest</a>.</p></main></html>`);
 console.log(`Built ${config.chapters.length} static chapters and 16 UML diagrams for ${current.sourceRevision}.`);
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))build();
