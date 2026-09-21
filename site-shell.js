(()=>{
  const btn=document.querySelector('.menu-button');
  const nav=document.getElementById('mobile-nav');
  if(!btn||!nav)return;
  const setOpen=open=>{
    document.body.classList.toggle('menu-open',open);
    btn.setAttribute('aria-expanded',String(open));
    btn.textContent=open?'×':'☰';
  };
  btn.addEventListener('click',()=>setOpen(!document.body.classList.contains('menu-open')));
  btn.addEventListener('keydown',e=>{
    if(e.key==='Escape')setOpen(false);
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false);});
  window.addEventListener('resize',()=>{if(window.innerWidth>900)setOpen(false);});
})();