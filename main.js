document.addEventListener('scroll',function(){
  var h=document.getElementById('siteHeader');
  if(h) h.classList.toggle('scrolled', window.scrollY > 4);
},{passive:true});

var burger=document.getElementById('burger');
var mnav=document.getElementById('mnav');
if(burger && mnav){
  burger.addEventListener('click',function(){
    var open=mnav.classList.toggle('open');
    burger.classList.toggle('open',open);
    document.body.classList.toggle('locked',open);
  });
  mnav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){mnav.classList.remove('open');burger.classList.remove('open');document.body.classList.remove('locked')});
  });
}

var tabs=document.querySelectorAll('.tab');
tabs.forEach(function(t){t.addEventListener('click',function(){tabs.forEach(function(x){x.classList.remove('active')});t.classList.add('active')})});

var io=new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});

[['catScroll']].forEach(function(pair){
  var scroller=document.getElementById(pair[0]);
  if(!scroller) return;
  var dots=scroller.parentElement.querySelectorAll('.snapdots span');
  if(!dots.length) return;
  scroller.addEventListener('scroll',function(){
    var idx=Math.round(scroller.scrollLeft/(scroller.firstElementChild.getBoundingClientRect().width+14));
    dots.forEach(function(d,i){
      d.style.background=i===idx?'var(--coral)':'';
      d.style.width=i===idx?'16px':'';
    });
  },{passive:true});
});

document.querySelectorAll('.accHead').forEach(function(h){
  h.addEventListener('click',function(){
    var item=h.closest('.accItem');
    var group=item.parentElement;
    var body=item.querySelector('.accBody');
    var wasOpen=item.classList.contains('open');
    group.querySelectorAll('.accItem').forEach(function(i){
      i.classList.remove('open');
      i.querySelector('.accBody').style.maxHeight=0;
    });
    if(!wasOpen){
      item.classList.add('open');
      body.style.maxHeight=body.scrollHeight+'px';
    }
  });
});

document.querySelectorAll('.newsletterForm').forEach(function(form){
  form.addEventListener('submit',function(e){
    e.preventDefault();
    form.innerHTML='<span class="newsletterDone">Bedankt! We laten je weten zodra er nieuwe toestellen binnenkomen.</span>';
  });
});

document.querySelectorAll('.contactForm').forEach(function(form){
  form.addEventListener('submit',function(e){
    e.preventDefault();
    form.innerHTML='<div class="orderDone" style="padding:30px 0">'+
      '<div class="checkIcon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg></div>'+
      '<h2 style="font-size:22px">Bericht verstuurd!</h2>'+
      '<p>Bedankt voor je bericht. We reageren binnen 24 uur persoonlijk terug.</p>'+
    '</div>';
  });
});
