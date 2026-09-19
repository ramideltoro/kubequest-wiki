const field=document.querySelector('#chapter-search');
field?.addEventListener('input',()=>{const query=field.value.trim().toLowerCase();let count=0;for(const link of document.querySelectorAll('.chapters a')){link.hidden=!link.textContent.toLowerCase().includes(query);if(!link.hidden)count++;}document.querySelector('.nav-empty').hidden=count>0;});
field?.addEventListener('keydown',event=>{if(event.key==='Escape'){field.value='';field.dispatchEvent(new Event('input'));}});
