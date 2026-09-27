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
