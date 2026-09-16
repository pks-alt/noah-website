(async()=>{
  const loadScript=src=>new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>reject(new Error('Unable to load '+src));document.head.appendChild(s);});
  await loadScript('rest-3-base.js');

  const propertyStyle=document.createElement('style');
  propertyStyle.textContent=`
    .property .browser-card{aspect-ratio:4/3!important;position:relative!important;overflow:hidden!important;padding:0!important;border-radius:16px!important;background:linear-gradient(145deg,#eef4f7,#f8fbfc)!important;border:1px solid rgba(7,16,26,.08)!important;box-shadow:0 18px 46px rgba(15,48,70,.10)!important}
    .property-showcase-link{display:block;width:100%;height:100%;overflow:hidden}
    .property-showcase-img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;transform:scale(1.002);transition:transform .5s cubic-bezier(.2,.72,.2,1),filter .3s ease;filter:saturate(.96) contrast(1.01)}
    .property:hover .property-showcase-img{transform:scale(1.025);filter:saturate(1) contrast(1.02)}
    .property-showcase-link:focus-visible{outline:2px solid #147bff;outline-offset:-3px}
    .property-showcase-badge{position:absolute;left:13px;bottom:12px;z-index:2;display:inline-flex;align-items:center;gap:7px;padding:7px 10px;border-radius:999px;background:rgba(5,16,26,.78);backdrop-filter:blur(12px);color:#f3f8fb;font-size:8px;font-weight:850;letter-spacing:.09em;text-transform:uppercase;box-shadow:0 8px 22px rgba(0,0,0,.15);pointer-events:none}
    .property-showcase-badge:before{content:'';width:6px;height:6px;border-radius:50%;background:#27d2d0;box-shadow:0 0 10px rgba(39,210,208,.72)}
    @media(min-width:1121px){.property{grid-template-columns:minmax(0,.82fr) minmax(280px,1.18fr)!important;gap:24px!important}}
    @media(max-width:720px){.property .browser-card{border-radius:13px!important}.property-showcase-badge{left:10px;bottom:9px;font-size:7px}}
  `;
  document.head.appendChild(propertyStyle);

  const loadParts=async parts=>{
    const chunks=await Promise.all(parts.map(async path=>{const r=await fetch(path,{cache:'force-cache'});if(!r.ok)throw new Error('Unable to load '+path);return (await r.text()).trim();}));
    return chunks.join('');
  };

  const cards=[...document.querySelectorAll('.network .property .browser-card')];
  const specs=[
    {parts:['assets/property/deals-1.txt','assets/property/deals-2.txt'],href:'https://www.dealscanvas.com/',alt:'DealsCanvas premium commerce discovery website showcase',label:'DealsCanvas · Live Commerce Property'},
    {parts:['assets/property/catch-1.txt','assets/property/catch-2.txt','assets/property/catch-3.txt','assets/property/catch-4.txt','assets/property/catch-5.txt','assets/property/catch-6.txt','assets/property/catch-7.txt','assets/property/catch-8.txt','assets/property/catch-9.txt'],href:'https://www.catchthedeal.ai/',alt:'CatchTheDeal.ai smart deals and commerce discovery website showcase',label:'CatchTheDeal.ai · Live Commerce Property'}
  ];

  await Promise.all(specs.map(async(spec,index)=>{
    const card=cards[index];
    if(!card)return;
    try{
      const b64=await loadParts(spec.parts);
      const link=document.createElement('a');
      link.className='property-showcase-link';link.href=spec.href;link.target='_blank';link.rel='noopener';link.setAttribute('aria-label','Open '+spec.alt);
      const img=document.createElement('img');img.className='property-showcase-img';img.alt=spec.alt;img.loading='lazy';img.decoding='async';img.src='data:image/webp;base64,'+b64;
      link.appendChild(img);
      const badge=document.createElement('span');badge.className='property-showcase-badge';badge.textContent=spec.label;
      card.replaceChildren(link,badge);
    }catch(err){console.warn('NOAH property showcase fallback retained:',err);}
  }));
})();