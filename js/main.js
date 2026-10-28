(function(){
  var play='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 2.5v19l10.2-9.5L4 2.5Zm11.6 8.2 2.7-2.5L6.2 1.6l9.4 9.1Zm0 2.6-9.4 9.1 12.1-6.6-2.7-2.5Zm4.9-3.3-2.9-1.6-2.9 2.6 2.9 2.6 2.9-1.6c.9-.5.9-1.5 0-2Z"/></svg>';
  var apple='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.4 12.6c0-2.4 2-3.5 2-3.6a4.3 4.3 0 0 0-3.4-1.8c-1.4-.2-2.8.8-3.5.8s-1.8-.8-3-.8a4.5 4.5 0 0 0-3.8 2.3c-1.6 2.8-.4 7 1.2 9.2.8 1.1 1.7 2.4 2.9 2.3s1.6-.7 3-.7 1.8.7 3 .7 2-1.1 2.8-2.2a9.7 9.7 0 0 0 1.3-2.6 4 4 0 0 1-2.5-3.6ZM14.1 5.6a4 4 0 0 0 .9-2.9 4.1 4.1 0 0 0-2.7 1.4 3.8 3.8 0 0 0-1 2.8 3.4 3.4 0 0 0 2.8-1.3Z"/></svg>';
  var apps=[
    {id:'bnq',name:'BNQ Global',short:'BNQ',ab:'BQ',c1:'#7C5CFF',c2:'#B06CFF',
     where:'Digital Code, Dec 2024 to now',status:['off','No longer listed in stores'],plat:['Android','iOS','Team lead'],
     desc:'An AI-powered centralised crypto exchange with spot trading, staking, mining, P2P trading, copy trading, trading bots, demo accounts and financial plans, secured with KYC and two-factor authentication.',
     did:['Led delivery of the mobile app end to end, from planning to production','Redesigned the app UI and rebuilt the P2P Trading module','Modernised Mining, Security, Deposit, Withdrawal, Send and Trade','Built real-time features on WebSocket / SignalR'],
     links:[],note:'The company has since taken the app off Google Play and the App Store.'},
    {id:'ivote',name:'iVote',short:'iVote',ab:'iV',c1:'#E879A6',c2:'#B05CD6',
     where:'Ivy Interactive Solutions, 2024',status:['off','No longer listed in stores'],plat:['Ivy in-house product'],
     desc:'A digital voting app that lets people check their voter details, report election concerns and follow updates through the election process.',
     did:['Built the app in Flutter as part of the Ivy mobile team','Worked on voter lookup, issue reporting and election updates'],
     links:[],note:'Ivy has since taken the app off the App Store and Google Play.'},
    {id:'merchant',name:'PostEx Merchant',short:'Merchant',ab:'PM',c1:'#FFA97F',c2:'#F2707A',
     where:'PostEx, 2022 to 2023',status:['ok','Live'],plat:['Android','iOS'],
     desc:'Order and logistics management for merchants: create orders, generate load sheets and track every shipment through picked, delivered, attempted, under verification and cancelled.',
     did:['Built order creation, load sheets and shipment tracking','Added real-time order statistics by status'],
     links:[['Get it on','Google Play','https://play.google.com/store/apps/details?id=com.postex.merchant',play],['Download on the','App Store','https://apps.apple.com/pk/app/postex-merchant/id6463854406',apple]]},
    {id:'partner',name:'PostEx Partner',short:'Partner',ab:'PP',c1:'#F2707A',c2:'#C9488A',
     where:'PostEx, 2022 to 2023',status:['ok','Live'],plat:['Android','iOS'],
     desc:'A logistics app for business partners to manage orders, load sheets and shipments, plus sub-merchants and users with role-based access.',
     did:['Built order management and shipment tracking','Added sub-merchant management and role-based access','Built category-specific features for different merchant types'],
     links:[['Get it on','Google Play','https://play.google.com/store/apps/details?id=com.postex.partner',play],['Download on the','App Store','https://apps.apple.com/pk/app/postex-partner/id6447757203',apple]]},
    {id:'wallet',name:'PostEx Wallet',short:'Wallet',ab:'PW',c1:'#4FD1B0',c2:'#2E9C9C',
     where:'PostEx, 2022 to 2023',status:['ok','Live'],plat:['Android','iOS'],
     desc:'A business wallet for merchants and partners to make payments, transfer funds and pay utility bills, with automated transaction records that cut down manual accounting.',
     did:['Built payment, transfer and bill-payment flows','Worked on automated transaction management'],
     links:[['Get it on','Google Play','https://play.google.com/store/apps/details?id=com.postex.wallet',play],['Download on the','App Store','https://apps.apple.com/pk/app/postex-business/id1664035972',apple]]},
    {id:'backoffice',name:'PostEx Backoffice',short:'Backoffice',ab:'PB',c1:'#6B5E9A',c2:'#2A2150',
     where:'PostEx, 2022 to 2023',status:['ok','Live, internal'],plat:['Android'],
     desc:'An internal app for supervisors to run warehouse operations: stock in and stock out, incoming and outgoing shipments, and real-time rider performance.',
     did:['Built stock-in and stock-out workflows','Built live stats for pickups, deliveries and returns'],
     links:[['Get it on','Google Play','https://play.google.com/store/apps/details?id=com.postex.backoffice',play]]},
    {id:'rider',name:'PostEx Rider',short:'Rider',ab:'PR',c1:'#8AA8FF',c2:'#7C5CFF',
     where:'PostEx, 2022 to 2023',status:['ok','Live, internal'],plat:['Android'],
     desc:'The daily tool for delivery riders: pickups, deliveries, returns and status updates for last-mile delivery.',
     did:['Built pickup, delivery and return flows','Built shipment status updates from the field'],
     links:[['Get it on','Google Play','https://play.google.com/store/apps/details?id=com.postex.rider',play]]}
  ];
  var grid=document.getElementById('grid'), detail=document.getElementById('detail');
  function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;')}
  function g(a){return 'linear-gradient(135deg,'+a.c1+','+a.c2+')'}
  function show(a){
    grid.querySelectorAll('.app').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.id===a.id?'true':'false')});
    detail.style.setProperty('--accent',a.c1);var pwe=document.getElementById('pw');if(pwe)pwe.style.setProperty('--h1',a.c1);
    var h='<div class="cover" style="background:'+g(a)+'"><span class="big" aria-hidden="true">'+a.ab+'</span></div>';
    h+='<div class="body"><div class="ttl"><div class="icon" style="background:'+g(a)+'">'+a.ab+'</div><div><h3>'+esc(a.name)+'</h3><div class="where">'+esc(a.where)+'</div></div></div>';
    h+='<div class="chips"><span class="chip '+a.status[0]+'">'+a.status[1]+'</span>'+a.plat.map(function(p){return '<span class="chip">'+p+'</span>'}).join('')+'</div>';
    h+='<p>'+esc(a.desc)+'</p><h4>What I did</h4><ul class="did">'+a.did.map(function(d){return '<li>'+esc(d)+'</li>'}).join('')+'</ul>';
    h+='<div class="stores">';
    a.links.forEach(function(l){h+='<a class="store" href="'+l[2]+'">'+l[3]+'<span><small>'+l[0]+'</small><b>'+l[1]+'</b></span></a>'});
    if(a.note){h+='<span class="note">'+esc(a.note)+'</span>'}
    h+='</div></div>';
    detail.innerHTML=h;detail.classList.remove('swap');void detail.offsetWidth;detail.classList.add('swap');
  }
  apps.forEach(function(a){
    var b=document.createElement('button');b.type='button';b.className='app';b.dataset.id=a.id;
    b.setAttribute('aria-pressed','false');b.setAttribute('aria-controls','detail');
    b.innerHTML='<span class="icon" style="background:'+g(a)+'">'+a.ab+'</span>'+a.short;
    b.addEventListener('click',function(){show(a); if(window.innerWidth<980){detail.scrollIntoView({behavior:'smooth',block:'start'})}});
    grid.appendChild(b);
  });
  show(apps[0]);



  var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches, HOVER=window.matchMedia('(hover:hover)').matches;
  // letters
  var l1=document.getElementById('l1');
  if(l1){var t=l1.textContent;l1.textContent='';t.split('').forEach(function(ch,i){var sp=document.createElement('span');sp.className='ch';sp.textContent=ch;sp.style.animationDelay=(i*0.05)+'s';l1.appendChild(sp)})}
  // hero 3D parallax
  var stage=document.getElementById('stage'), hero=document.querySelector('.heroband');
  if(stage && !RM){
    if(HOVER){
      hero.addEventListener('pointermove',function(e){
        var r=stage.getBoundingClientRect(),x=(e.clientX-(r.left+r.width/2))/window.innerWidth,y=(e.clientY-(r.top+r.height/2))/window.innerHeight;
        stage.style.setProperty('--ry',(x*22)+'deg');stage.style.setProperty('--rx',(-y*16)+'deg');
        stage.querySelectorAll('[data-depth]').forEach(function(el){var d=+el.dataset.depth;el.style.setProperty('--px',(x*d)+'px');el.style.setProperty('--py',(y*d)+'px')});
        var pf=stage.querySelector('.phoneframe');if(pf)pf.style.setProperty('--shine',(50-x*120)+'%');
      });
      hero.addEventListener('pointerleave',function(){stage.style.setProperty('--ry','0deg');stage.style.setProperty('--rx','0deg');stage.querySelectorAll('[data-depth]').forEach(function(el){el.style.setProperty('--px','0');el.style.setProperty('--py','0')})});
    } else { stage.classList.add('auto'); }
  }
  // tilt cards
  if(HOVER && !RM){
    document.querySelectorAll('[data-tilt]').forEach(function(el){
      var m=+el.dataset.tilt||6;
      el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        el.classList.add('tilting');el.style.transform='perspective(900px) rotateX('+(-y*m)+'deg) rotateY('+(x*m)+'deg) translateZ(0)'});
      el.addEventListener('pointerleave',function(){el.classList.remove('tilting');el.style.transform=''});
    });
    var pwr=document.getElementById('pw');
    if(pwr){pwr.addEventListener('pointermove',function(e){var r=pwr.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;pwr.style.setProperty('--ry',(x*16)+'deg');pwr.style.setProperty('--rx',(-y*12)+'deg')});
      pwr.addEventListener('pointerleave',function(){pwr.style.setProperty('--ry','0deg');pwr.style.setProperty('--rx','0deg')})}
  }



  // deterrents: no right-click, no copy/cut, no dev-tool / view-source / save shortcuts, no image drag
  document.addEventListener('contextmenu',function(e){e.preventDefault()});
  ['copy','cut','selectstart','dragstart'].forEach(function(ev){document.addEventListener(ev,function(e){e.preventDefault()})});
  document.addEventListener('keydown',function(e){
    var k=(e.key||'').toLowerCase(), c=e.ctrlKey||e.metaKey;
    if(k==='f12' || (c&&e.shiftKey&&(k==='i'||k==='j'||k==='c'||k==='k')) || (e.metaKey&&e.altKey&&(k==='i'||k==='j'||k==='c'||k==='u')) || (c&&(k==='u'||k==='s'||k==='c'||k==='x'||k==='a'||k==='p'))){e.preventDefault();e.stopPropagation();return false}
  },true);

  var sb=document.getElementById('scrollbtn'),prog=document.getElementById('prog'),C=163.4;
  function upd(){
    var max=document.documentElement.scrollHeight-window.innerHeight, y=window.scrollY||window.pageYOffset, p=max>0?y/max:0;
    prog.style.strokeDashoffset=(C*(1-p)).toFixed(1);
    var up=p>0.5; sb.classList.toggle('up',up);
    sb.setAttribute('aria-label',up?'Scroll back to the top':'Scroll to the bottom of the page');
  }
  window.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);upd();
  sb.addEventListener('click',function(){
    var max=document.documentElement.scrollHeight-window.innerHeight;
    window.scrollTo({top:sb.classList.contains('up')?0:max,behavior:RM?'auto':'smooth'});
  });

  var pw=document.getElementById('pw');
  document.querySelectorAll('.glow').forEach(function(el){
    el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect();el.style.setProperty('--mx',(e.clientX-r.left)+'px');el.style.setProperty('--my',(e.clientY-r.top)+'px')});
  });
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('.cnt').forEach(function(c){var to=+c.dataset.to,t0=null;c.textContent='0';
      function step(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/1200);c.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)}
      setTimeout(function(){requestAnimationFrame(step)},300)});
  }

  var rv=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    rv.forEach(function(el){io.observe(el)});
  } else { rv.forEach(function(el){el.classList.add('in')}) }

  document.querySelectorAll('.copy').forEach(function(btn){
    btn.addEventListener('click',function(){
      var v=btn.getAttribute('data-copy');
      try{navigator.clipboard.writeText(v).then(function(){btn.textContent='Copied';setTimeout(function(){btn.textContent='Copy'},1600)},function(){btn.textContent='Select to copy'})}catch(e){btn.textContent='Select to copy'}
    });
  });
})();
