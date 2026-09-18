(async()=>{
  const loadScript=src=>new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>reject(new Error('Unable to load '+src));document.head.appendChild(s);});
  await loadScript('rest-3-base.js');

  /* The homepage now has a dedicated Solutions page. */
  const homepageNav=[...document.querySelectorAll('.nav a')];
  if(homepageNav[0])homepageNav[0].setAttribute('href','solutions.html');
  document.querySelectorAll('.site-footer .footer-col:first-of-type a').forEach(a=>a.setAttribute('href','solutions.html'));

  /* Load the stability pass after every existing stylesheet, including polish.css. */
  const layoutFixes=document.createElement('link');
  layoutFixes.rel='stylesheet';
  layoutFixes.href='layout-fixes.css';
  document.head.appendChild(layoutFixes);

  const propertyStyle=document.createElement('style');
  propertyStyle.textContent=`
    .property .browser-card{aspect-ratio:4/3!important;position:relative!important;overflow:hidden!important;padding:0!important;border-radius:18px!important;background:linear-gradient(145deg,#eef4f7,#f8fbfc)!important;border:1px solid rgba(7,16,26,.08)!important;box-shadow:0 18px 46px rgba(15,48,70,.10)!important}
    .property-showcase-link{display:block;width:100%;height:100%;overflow:hidden;position:relative}
    .property-showcase-link:before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(6,16,26,0) 54%,rgba(6,16,26,.10) 100%);z-index:1;pointer-events:none}
    .property-showcase-img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;transform:scale(1.002);transition:transform .55s cubic-bezier(.2,.72,.2,1),filter .3s ease;filter:saturate(.98) contrast(1.01)}
    .property:hover .property-showcase-img{transform:scale(1.03);filter:saturate(1.03) contrast(1.02)}
    .property-showcase-link:focus-visible{outline:2px solid #147bff;outline-offset:-3px}
    .property-showcase-badge{position:absolute;left:13px;bottom:12px;z-index:2;display:inline-flex;align-items:center;gap:7px;padding:7px 10px;border-radius:999px;background:rgba(5,16,26,.78);backdrop-filter:blur(12px);color:#f3f8fb;font-size:8px;font-weight:850;letter-spacing:.09em;text-transform:uppercase;box-shadow:0 8px 22px rgba(0,0,0,.15);pointer-events:none}
    .property-showcase-badge:before{content:'';width:6px;height:6px;border-radius:50%;background:#27d2d0;box-shadow:0 0 10px rgba(39,210,208,.72)}
    .property-copy .eyebrow{margin-top:0}
    @media(min-width:1121px){.property{grid-template-columns:minmax(0,.82fr) minmax(280px,1.18fr)!important;gap:24px!important}}
    @media(max-width:720px){.property .browser-card{border-radius:13px!important}.property-showcase-badge{left:10px;bottom:9px;font-size:7px}}
  `;
  document.head.appendChild(propertyStyle);

  const loadImage=async path=>{
    const r=await fetch(path,{cache:'force-cache'});
    if(!r.ok)throw new Error('Unable to load '+path);
    return (await r.text()).trim();
  };

  const cards=[...document.querySelectorAll('.network .property .browser-card')];
  const specs=[
    {mode:'direct',src:'assets/property/dealscanvas-homepage.webp',href:'https://www.dealscanvas.com/',alt:'DealsCanvas developed commerce showcase',label:'DealsCanvas · NOAH Commerce Property'},
    {mode:'direct',src:'assets/property/catchthedeal-homepage.avif',href:'https://www.catchthedeal.ai/',alt:'CatchTheDeal.ai smart shopping and deals showcase',label:'CatchTheDeal.ai · NOAH Commerce Property'}
  ];

  await Promise.all(specs.map(async(spec,index)=>{
    const card=cards[index];
    if(!card)return;
    try{
      let imageSrc=spec.src||'';
      if(spec.mode==='base64'){
        const b64=await loadImage(spec.path);
        imageSrc='data:image/webp;base64,'+b64;
      }
      const link=document.createElement('a');
      link.className='property-showcase-link';link.href=spec.href;link.target='_blank';link.rel='noopener';link.setAttribute('aria-label','Open '+spec.alt);
      const img=document.createElement('img');img.className='property-showcase-img';img.alt=spec.alt;img.loading='lazy';img.decoding='async';img.src=imageSrc;
      link.appendChild(img);
      const badge=document.createElement('span');badge.className='property-showcase-badge';badge.textContent=spec.label;
      card.replaceChildren(link,badge);
    }catch(err){console.warn('NOAH property showcase fallback retained:',err);}
  }));
})();
