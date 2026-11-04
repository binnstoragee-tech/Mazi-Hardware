const g=(h,s)=>[h,s.split('|')];
const MENU={
'Hardware':{cols:[[g('Explore Hardware','Adhesives & Sealants|Fixing Systems|Nails|Oils & Additives|Screws|Tapes & Tape Dispensers')],[g('Building Materials','Blockboards|Fibre & Smartboards|Metalwork|Plasterboards|Plywood|Cement')],[g('Door Hardware','Deadbolts|Door Closers|Door Handles|Door Hinges|Door Latches|Door Locks|Doorstops|Lock Cylinders')],[g('Finishing Materials','Laminate|Plastic sheets'),g('Plumbing','PVC Fittings|PVC pipes|Hot Water Fittings|Hot Water Pipes')],[g('Furniture Hardware','Cabinet Handles|Cabinet Hinges|Cabinet Knobs|Casters|Drawer Runners & Rails'),g('Tiles','Floor tiles|Grouts|Mosaics|Tile & Floor Adhesives|Wall tiles')],[g('Paints & Coatings','Enamels & Floor Paint|Exterior Paint|Interior Paint|Primer & Putty|Spray Paints|Stickers & Films|Tapes|Wallpapers|Wood Treatments|Painting Accessories')]]},
'Tools & Equipment':{cols:[[g('Hand Tools','All Hand Tools|Cutting Tools|Hammers & Axes|Hand Saws|Measures & Levels|Planes, Chisels & Files|Screwdrivers & Keys|Spanners, Sockets & Wrenches|Staplers & Riveters|Tool Kits')],[g('Equipment','All Equipment|Commercial Scale|Compressors & Air Tools|Power Generators & Pumps|Test Equipment')],[g('Other','Hand Trucks & Carts|Industrial Waste Bins|Ladders & Steps|Painting Accessories|Storage|Vices & Clamps')]]},
'Power Tools':{cols:[[g('Power Tools','All Power Tools|Angle & Bench Grinders|Blowers|Demolition Hammers|Drills|Glue & Heat guns|Impact Drivers & Wrenches|Measuring Tools|Multi Tools & Hobby Tools|Routers|Sanders & Planers|Saws|Screwdrivers|Tool Kits')],[g('Power Tool Accessories','All Accessories|Battery and Chargers|Chiseling|Cutting & Grinding|Sanding & Polishing')]]},
'Electrical':{cols:[[g('Explore Electrical','Adapters & Extension cords|Batteries|Circuit Breakers and Fuses|Switches & Sockets')]]},
'Lighting':{cols:[[g('Explore Lighting','Ceiling & Downlights|Pendant Lights|Light Bulbs|Outdoor Lighting|Spotlights & Track Lights|String Lights|Table & Floor Lamps|Torches & Worklights')]]},
'Home':{cols:[[g('Explore Home','Home Accessories|Home Appliances|Home Decor|Home Furnishing|Water Pumps & Accessories')],[g('Home Cleaning','Brooms & Dustpans|Cleaning Brushes|Cleaning Cloths|Mops|Sponges|Spray Bottles|Tissue & Toilet Papers|Rakes')],[g('Cleaning Equipment','Cleaning Accessories|Cleaning Agents|Floor Cleaners|Pressure Washers|Steam Cleaners|Vacuum Cleaners|Wet and Dry Vacuum Cleaners')],[g('Laundry','Clothes Drying Racks|Irons & Steamers|Ironing Boards|Ironing Board Covers|Laundry Bags & Baskets')],[g('Outdoor & Garden','Garden Tools|Hose Pipes|Hose Pipe Connections')]]},
'Kitchen':{cols:[[g('Cooking','All Cookware & Bakeware|Cutting Boards|Cookware|Bakeware|Knives|Gadgets|Scissors|Utensils')],[g('Dining','All Dining & Drinkware|Cutlery|Dinnerware|Drinkware & Barware'),g('Explore Kitchen','All Kitchen|Kitchen Cleaning|Kitchen Bins|Kitchen Faucets|Kitchen Organisation|Kitchen Scales|Kitchen Sinks|Soap Dispensers')],[g('Food Storage','All Food Storage|Drink Dispensers|Food Containers|Jars|Lunch Boxes|Plastic Wrap & Bags|Water Bottles & Tumblers')],[g('Appliances','All Kitchen Appliances|Air Fryer|Deep Fryers|Food Steamers|Kettles|Rice Cookers')]]},
'Bathroom':{cols:[[g('Showerplace','Baths & Cubicles|Hand Showers|Overhead showers|Shower drains|Shower Sets|Water Heaters')],[g('Toiletplace','Bidet showers|Installation & Flushing Systems|Seats and Covers|Toilets|Toilet Mechanisms|Urinals')],[g('Washplace','Bathroom Accessories|Bathroom Fittings|Bathroom Scales|Faucets|Mirrors|Wash Basins')]]},
'Fishing':{cols:[[g('Reels','All Reels|Overhead|Spinning|Trolling')],[g('Rods','All Rods|Boat|Jigging|Shore|Trolling')],[g('Lines','All Lines|Braided|Fluorocarbon|Leaders|Monofilament|Specialty|Trolling')],[g('Lures','All Lures|Jigs|Poppers|Stick Baits|Trolling')],[g('Hooks','All Hooks|Assist Hooks|Big Game Hooks|Commercial')],[g('Tools & Gear','All Tools & Gear|Apparel|Flashlights|Ice Boxes|Storage & Bags|Terminal Tackle')]]},
'More':{cols:[[g('Explore More','Shop All'),g('Safety & Security','Safes|Padlocks')],[g('Fans','Ceiling Fans|Exhaust Fans|Orbital Fans|Stand Fans|Wall Fans')],[g('Gardening Tools','Garden Hoes|Pruning tools|Rakes|Wheelbarrows')],[g('Safety & Workwear','PPE|Safety footwear|Workwear')],[g('Professional Cleaning','Carpet Cleaners|Detergents|Floor Scrubbers|Karcher Accessories|Professional Cleaning|Vacuums|Wet and Dry Vacuum Cleaners')],[g('Lifestyle','Lifestyle|Electronics|Fashion Accessories|Beauty & Wellness|Crafts & stationery')]]}};
const CATS=['Hardware','Tools & Equipment','Power Tools','Electrical','Lighting','Home','Kitchen','Bathroom','Fishing','More'];
const FB='https://www.facebook.com/',IG='https://www.instagram.com/'; // TODO: replace with Mazi Hardware Facebook / Instagram page links
const WA='9600000000'; // TODO: replace with Mazi Hardware WhatsApp/Viber number (country code, no +)
const PRODUCTS=[
['Cordless Angle Grinder 20V',1792,'Power Tools','Ingco'],['Mini Angle Grinder 4"',1021,'Power Tools','Bosch'],['Angle Grinder 710W',646,'Power Tools','Ingco'],['Impact Drill 650W',845,'Power Tools','Bosch'],
['Claw Hammer 16oz',95,'Tools & Equipment','Ingco'],['Measuring Tape 8m',48,'Tools & Equipment','Ingco'],['Screwdriver Set 12pc',160,'Tools & Equipment','Ingco'],['Interior Emulsion Paint 18L',1150,'Hardware','Caparol'],
['Acoustic Slatted Wall Panel 2.4m',685,'Hardware','Mazi'],['Floor Tile 60x60cm (box)',420,'Hardware','Mazi'],['Double Socket 13A',72,'Electrical','ABB'],['Extension Cord 5m',130,'Electrical','Dunlop'],
['LED Downlight 12W',58,'Lighting','Mazi'],['Pendant Light Black',390,'Lighting','Mazi'],['Ceiling Fan 48"',1923,'Home','Orient'],['Wet & Dry Vacuum Cleaner',1189,'Home','Karcher'],
['Air Fryer 4L',1260,'Kitchen','Tefal'],['Cookware Set 5pc',1480,'Kitchen','Tefal'],['Shower Set with Rain Head',4850,'Bathroom','Hansgrohe'],['Basin Mixer Chrome',1290,'Bathroom','Roca'],['Spinning Reel 4000',780,'Fishing','Shimano'],['Shore Rod 3.6m',640,'Fishing','Shimano'],['Safety Helmet',85,'More','Dunlop'],['Brass Padlock 50mm',70,'More','Mazi']];
const BRANDS=['ABB','Bosch','Caparol','Dunlop','Hansgrohe','Ingco','Karcher','Roca','Tefal'];
const NEW=PRODUCTS.slice(14,19);
const POWER=PRODUCTS.filter(p=>p[2]==='Power Tools');

/* ===== App ===== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const money=n=>'MVR '+n.toLocaleString('en',{minimumFractionDigits:2,maximumFractionDigits:2});
const enq=n=>`https://wa.me/${WA}?text=${encodeURIComponent('Hi, I would like to enquire about: '+n)}`;
const label=c=>c;
const CHEV='<svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m2 4 3.5 3.5L9 4"/></svg>';
/* Flat line icons: thin single-colour outline (48x48) */
const BL='<path d="M24 24c-1-6-1-10 2-13 2.500-2.500 6-1.500 6 1 0 4-3 9-8 12z"/>';
const ICONS={Tiles:'<rect x="8" y="8" width="32" height="32" rx="4"/><path d="M24 8v32M8 24h32"/>',
Fans:`${BL}<g transform="rotate(90 24 24)">${BL}</g><g transform="rotate(180 24 24)">${BL}</g><g transform="rotate(270 24 24)">${BL}</g><circle cx="24" cy="24" r=".6"/>`,
'Switches & Sockets':'<path d="M18 6v10M30 6v10M13 16h22v6a11 11 0 0 1-22 0zM24 33v10"/>',
'Sanitary Ware':'<path d="M13 7h14a3 3 0 0 1 3 3v12H13V10a3 3 0 0 1 0-3zM8 25h32c-1 8-5 12-11 12h-10C13 37 9 33 8 25zM18 37l-2 5h16l-2-5"/>',
'Power Tools':'<path d="M9 9h20a3 3 0 0 1 3 3v6H9a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zM32 12h4v6h-4M36 15h7M14 18l-2 14h6l2-14M10 32h12v6a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"/>',
'Home & Garden Cleaning':'<rect x="21.500" y="5" width="5" height="11" rx="1.500"/><path d="M10 41l4-17c0-2 2-3 4-3h12c2 0 4 1 4 3l4 17zM19 30l-1 11M24 30v11M29 30l1 11"/>',
Paint:'<rect x="7" y="8" width="30" height="11" rx="3"/><path d="M37 13h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H24v5"/><rect x="21" y="28" width="6" height="13" rx="3"/>',
Hardware:'<g transform="rotate(45 24 24)"><rect x="21" y="13" width="6" height="30" rx="3"/><rect x="11" y="5" width="26" height="9" rx="2.500"/></g>'};
const CI=[['Tiles','Hardware','tile'],['Fans','Home','fan'],['Switches & Sockets','Electrical',''],['Sanitary Ware','Bathroom',''],['Power Tools','Power Tools',''],['Home & Garden Cleaning','Home','vacuum'],['Paint','Hardware','paint'],['Hardware','All','']];
let cat='All',q='';

/* Card */
const card=p=>`<div class="pc"><div class="pi">${p[3]}</div><h3>${p[0]}</h3><div class="pf"><span class="p">MVR <b>${p[1].toLocaleString('en',{minimumFractionDigits:2})}</b></span><a href="${enq(p[0])}" target="_blank" rel="noreferrer" aria-label="Enquire"><svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg></a></div></div>`;

/* Catalog */
const esc=s=>s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
/* Every category has its own page: hardware.html, power-tools.html, kitchen.html ... (products.html = all) */
const slug=c=>c==='All'?'products':c.toLowerCase().replace(/&/g,'').trim().replace(/\s+/g,'-');
const pageUrl=(c,s='')=>slug(c)+'.html'+(s?'?q='+encodeURIComponent(s):'');
function readURL(){const c=document.body.dataset.cat;cat=(c&&CATS.includes(c))?c:'All';q=new URLSearchParams(location.search).get('q')||'';if($('#q'))$('#q').value=q}
function renderCatalog(){
  const main=$('main.page');if(!$('#grid')||!main)return; /* only on category pages */
  const name=cat==='All'?'All products':cat,v=q.trim().toLowerCase();
  document.title=name+' – Mazi Hardware';
  const base=PRODUCTS.filter(p=>(cat==='All'||p[2]===cat)&&(!v||(p[0]+p[3]+p[2]).toLowerCase().includes(v)));
  const hay=p=>(p[0]+' '+p[3]).toLowerCase();
  const toks=l=>l.toLowerCase().split(/[^a-z]+/).filter(t=>t.length>3).map(t=>t.replace(/s$/,''));
  const hit=(p,l)=>toks(l).some(t=>hay(p).includes(t));
  const subs=[];
  if(cat!=='All')MENU[cat].cols.flat().forEach(([h,l])=>{if(/^(explore|other)/i.test(h))subs.push(...l.filter(x=>!/^(all|shop all)/i.test(x)));else subs.push(h)});
  const chips=[...new Set(subs)].slice(0,10);
  const types=chips.map(c=>[c,base.filter(p=>hit(p,c)).length]).filter(t=>t[1]>0);
  const brands=[...new Set(base.map(p=>p[3]))].sort().map(b=>[b,base.filter(p=>p[3]===b).length]);
  /* dark banner with the page title */
  $$('.phero').forEach(x=>x.remove());
  main.insertAdjacentHTML('beforebegin','<section class="phero"><div class="wrap"><h1>'+(v?'Results for “'+esc(q.trim())+'”':esc(name))+'</h1></div></section>');
  const CH='<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m2 4.500 4 4 4-4"/></svg>';
  const block=(t,items,key)=>items.length?`<div class="fb2 open"><button type="button" class="fh">${t}${CH}</button><div class="fbody">${items.map(([n,c])=>`<label class="ck"><input type="checkbox" data-k="${key}" value="${esc(n)}"><span>${esc(n)} (${c})</span></label>`).join('')}</div></div>`:'';
  const chipHtml=cat==='All'
    ?CATS.map(c=>`<a class="pill" href="${pageUrl(c)}">${esc(c)}</a>`).join('')
    :chips.length?`<button type="button" class="pill on" data-sub="">All</button>`+chips.map(c=>`<button type="button" class="pill" data-sub="${esc(c)}">${esc(c)}</button>`).join(''):'';
  main.innerHTML=(chipHtml?`<div class="pills">${chipHtml}</div>`:'')+
  `<div class="shop"><aside class="flt">${block('Brand',brands,'b')}${block('Product type',types,'t')}</aside>
  <section class="res"><div class="bar"><span id="cn"></span><select id="so" aria-label="Sort"><option value="best">Best selling</option><option value="az">Name: A to Z</option><option value="za">Name: Z to A</option></select></div><div class="grid" id="grid"></div></section></div>`;
  let sub='',sort='best';const sel={b:new Set(),t:new Set()};
  const draw=()=>{
    let l=base.filter(p=>(!sub||hit(p,sub))&&(!sel.b.size||sel.b.has(p[3]))&&(!sel.t.size||[...sel.t].some(t=>hit(p,t))));
    if(sort==='az')l=[...l].sort((x,y)=>x[0].localeCompare(y[0]));
    if(sort==='za')l=[...l].sort((x,y)=>y[0].localeCompare(x[0]));
    $('#cn').textContent=l.length+' products';
    $('#grid').innerHTML=l.length?l.map(card).join(''):'<p class="empty">No products found.</p>';
  };
  $$('.pill[data-sub]').forEach(b=>b.onclick=()=>{sub=b.dataset.sub;$$('.pill[data-sub]').forEach(x=>x.classList.toggle('on',x===b));draw()});
  $$('.fh').forEach(b=>b.onclick=()=>b.parentElement.classList.toggle('open'));
  $$('.flt input').forEach(i=>i.onchange=()=>{const s=sel[i.dataset.k];i.checked?s.add(i.value):s.delete(i.value);draw()});
  $('#so').onchange=e=>{sort=e.target.value;draw()};
  draw();
}
function go(c,s=''){setMenu(null);closeDr();location.href=pageUrl(c,s)}

/* Mega menu: hover open, blur page behind */
$('#navlist').innerHTML=CATS.map(c=>{const m=MENU[c];return `<li><a href="${slug(c)}.html" data-go="${c}">${c}${CHEV}</a><div class="mega"><div class="wrap"><div class="cols">${m.cols.map(col=>`<div class="col">${col.map(([h,l])=>`<div class="g"><h4>${h}</h4><div class="ls${l.length>8?' two':''}">${l.map(x=>`<a data-go="${c}">${x}</a>`).join('')}</div></div>`).join('')}</div>`).join('')}</div></div></div></li>`}).join('');
let tm;
function setMenu(li){clearTimeout(tm);$$('#navlist li').forEach(l=>l.classList.toggle('on',l===li));document.body.classList.toggle('mo',!!li)}
$$('#navlist li').forEach(li=>li.addEventListener('mouseenter',()=>setMenu(li)));
$('.r')?.addEventListener('mouseenter',()=>setMenu(null));
$('nav.main').addEventListener('mouseleave',()=>{tm=setTimeout(()=>setMenu(null),200)});
$('nav.main').addEventListener('mouseenter',()=>clearTimeout(tm));
$('#blur').addEventListener('click',()=>setMenu(null));
addEventListener('keydown',e=>{if(e.key==='Escape'){setMenu(null);closeDr()}});

/* Mobile drawer */
const dr=$('#dr'),ov=$('#ov');
const closeDr=()=>{dr.classList.remove('on');ov.classList.remove('on')};
$('#bg').onclick=()=>{dr.classList.add('on');ov.classList.add('on')};
$('#dx').onclick=closeDr;ov.onclick=closeDr;
$('#dm').innerHTML=`<button data-go="All">All products</button>`+CATS.map(c=>`<button data-go="${c}">${label(c)}</button>`).join('');

/* Hero hotspots */
if($('#hs'))$('#hs').innerHTML=[['24%','14%',PRODUCTS[12]],['76%','28%',PRODUCTS[8]],['58%','86%',PRODUCTS[9]]].map(h=>`<div class="hs" style="left:${h[0]};top:${h[1]}"><button aria-label="Product">+</button><div class="tip"><b>${h[2][0]}</b><span>${money(h[2][1])}</span><a href="${enq(h[2][0])}" target="_blank" rel="noreferrer">ENQUIRE</a></div></div>`).join('');
$$('.hs>button').forEach(b=>b.onclick=()=>{const h=b.parentElement,on=h.classList.contains('on');$$('.hs').forEach(x=>{x.classList.remove('on');x.firstChild.textContent='+'});if(!on){h.classList.add('on');b.textContent='×'}});

/* Sections */
if($('#icons'))$('#icons').innerHTML=CI.map(c=>`<button class="ico" data-go="${c[1]}" data-q="${c[2]}"><svg viewBox="0 0 48 48">${ICONS[c[0]]}</svg><span>${c[0]}</span></button>`).join('');
if($('#tiles'))$('#tiles').innerHTML=[['LIVING','Wall panels & finishes','Hardware','20% 60%'],['POWER TOOLS','Tools for every project','Power Tools','80% 40%'],['LIGHTING','Bright ideas for every room','Lighting','25% 5%'],['HOME','Everything for the home','Home','60% 95%']].map(t=>`<button class="tile" style="background-position:${t[3]}" data-go="${t[2]}"><small>${t[0]}</small><span>${t[1]}</span></button>`).join('');
if($('#brands')){const it=[...BRANDS,...BRANDS].map(b=>`<button data-go="All" data-q="${b}">${b}</button>`).join('');
$('#brands').innerHTML=`<div class="bh">Brands</div><div class="bm"><div class="bt">${it}${it}</div></div>`} /* two identical halves -> seamless slide-left loop */
if($('#r1'))$('#r1').innerHTML=NEW.map(card).join('');
/* Footer (dark green, columns) */
(()=>{const f=$('footer');if(!f)return;
const ic=d=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+d+'</svg>';
f.innerHTML=`<div class="wrap"><div class="fg2">
<div class="fc0"><img src="img/logo.png" alt="Mazi Hardware"><p>Hardware, tools and fittings in the Maldives.</p>
<div class="soc"><a href="${FB}" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">${ic('<path d="M14 8.500V7a1.500 1.500 0 0 1 1.500-1.500H17V2h-2.500A4.500 4.500 0 0 0 10 6.500v2H7V12h3v10h4V12h2.800l.7-3.500z"/>')}</a><a href="${IG}" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">${ic('<rect x="3" y="3" width="18" height="18" rx="5.500"/><circle cx="12" cy="12" r="4.200"/><circle cx="17.300" cy="6.700" r=".6" fill="currentColor"/>')}</a><a href="mailto:sales@mazihardware.com" aria-label="Email" title="Email">${ic('<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3.500 7.500 8.500 6 8.500-6"/>')}</a></div></div>
<div><h4>Shop</h4><div id="fb"></div></div>
<div><h4>Company</h4><a class="l" href="products.html">All products</a><a class="l" href="index.html#new">Offers</a><a class="l" href="index.html#brands">Brands</a></div>
<div><h4>Get in touch</h4><p>Maafannu, Malé, Maldives</p><a class="l" href="tel:+9607509686">7509686 / 3330068</a><a class="l" href="mailto:sales@mazihardware.com">sales@mazihardware.com</a></div>
</div><div class="cpr">Copyright 2026 © MAZI HARDWARE</div></div>`})();
$('#fb').innerHTML=CATS.slice(0,6).map(c=>`<button data-go="${c}">${c}</button>`).join('');

/* Contact dropdown (WhatsApp / Viber) */
(()=>{const ct=$('#ct'),b=$('#ctb');if(!ct||!b)return;const set=o=>{ct.classList.toggle('open',o);b.setAttribute('aria-expanded',o)};
b.addEventListener('click',e=>{e.stopPropagation();if(matchMedia('(hover:hover)').matches)return; /* desktop: opens on hover */set(!ct.classList.contains('open'))});
document.addEventListener('click',e=>{if(!ct.contains(e.target))set(false)});
addEventListener('keydown',e=>{if(e.key==='Escape')set(false)})})();
$('#hwa').href='https://wa.me/'+WA;$('#hvb').href='viber://chat?number=%2B'+WA;

/* Footer logo: strip the white background by redrawing the image with white pixels made transparent */
(()=>{const im=$('footer img');if(!im)return;
const run=()=>{try{const c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;const x=c.getContext('2d');x.drawImage(im,0,0);
const d=x.getImageData(0,0,c.width,c.height),a=d.data;
for(let i=0;i<a.length;i+=4){const m=Math.min(a[i],a[i+1],a[i+2]);if(m>235)a[i+3]=0;else if(m>195)a[i+3]=Math.round(a[i+3]*(235-m)/40)}
x.putImageData(d,0,0);im.src=c.toDataURL('image/png')}catch(e){im.style.filter='url(#wb)'}};
(im.complete&&im.naturalWidth)?run():im.addEventListener('load',run,{once:true})})();

/* Events */
document.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g){e.preventDefault();go(g.dataset.go,g.dataset.q||'')}});
$('#sf').addEventListener('submit',e=>{e.preventDefault();go('All',$('#q').value)});
readURL();renderCatalog();
