window.PRODUCTS = [
  {
    id:'iphone-air-512-zwart',
    category:'iPhone',
    title:'iPhone Air 512GB zwart',
    price:789, oldPrice:899,
    battery:100, storage:512,
    condition:'Krasvrij',
    badge:'100% batterij',
    img:'images/hero.jpg',
    gallery:['images/hero.jpg','images/iphone.jpg','images/iphone2.jpg'],
    meta:'Krasvrij · 100% batt · incl. 12 mnd garantie, doos en oplaadkabel',
    warranty:'12 maanden',
    specs:{scherm:'6,1" Super Retina XDR', chip:'A18', kleur:'Zwart', opslag:'512GB'},
    description:'Originele premium pre-owned iPhone: niet refurbished en geen onderdelen vervangen. 100% batterijcapaciteit en krasvrije staat, inclusief doos en oplaadkabel.'
  },
  {
    id:'iphone-16-pro-128-wit',
    category:'iPhone',
    title:'iPhone 16 Pro 128GB wit',
    price:619, oldPrice:719,
    battery:91, storage:128,
    condition:'Krasvrij',
    badge:'Krasvrij',
    img:'images/iphone2.jpg',
    gallery:['images/iphone2.jpg','images/iphone.jpg','images/hero.jpg'],
    meta:'Krasvrij · 91% batt · incl. 12 mnd garantie en oplaadkabel',
    warranty:'12 maanden',
    specs:{scherm:'6,3" Super Retina XDR', chip:'A18 Pro', kleur:'Wit', opslag:'128GB'},
    description:'Originele premium pre-owned iPhone 16 Pro, niet refurbished. Krasvrije staat met 91% batterijcapaciteit.'
  },
  {
    id:'iphone-15-pro-256-zwart',
    category:'iPhone',
    title:'iPhone 15 Pro 256GB zwart',
    price:579, oldPrice:679,
    battery:95, storage:256,
    condition:'Licht gebruikt',
    badge:'Hoge batterijconditie',
    img:'images/iphone3.jpg',
    gallery:['images/iphone3.jpg','images/iphone4.jpg','images/iphone.jpg','images/iphone2.jpg'],
    meta:'Licht gebruikt · 95% batt · incl. 12 mnd garantie',
    warranty:'12 maanden',
    specs:{scherm:'6,1" Super Retina XDR', chip:'A17 Pro', kleur:'Zwart (titanium)', opslag:'256GB'},
    description:'Originele premium pre-owned iPhone 15 Pro. Batterij op 18 januari 2026 origineel vervangen bij Apple (95%). Licht gebruikte staat, enkele krasjes op het glas — zie de uitgebreide fotoreportage.'
  },
  {
    id:'iphone-15-pro-128-zwart',
    category:'iPhone',
    title:'iPhone 15 Pro 128GB zwart',
    price:569, oldPrice:629,
    battery:98, storage:128,
    condition:'Zeer nette staat',
    badge:'Hoge batterijconditie',
    img:'images/iphone4.jpg',
    gallery:['images/iphone4.jpg','images/iphone3.jpg','images/iphone.jpg'],
    meta:'Zeer nette staat · 98% batt · incl. 12 mnd garantie',
    warranty:'12 maanden',
    specs:{scherm:'6,1" Super Retina XDR', chip:'A17 Pro', kleur:'Zwart (titanium)', opslag:'128GB'},
    description:'Originele premium pre-owned iPhone 15 Pro, slechts 128 keer opgeladen. 98% batterijcapaciteit en zeer nette staat.'
  },
  {
    id:'ipad-pro-11-256',
    category:'iPad',
    title:'iPad Pro 11" 256GB space grey',
    price:649, oldPrice:749,
    battery:96, storage:256,
    condition:'Zeer nette staat',
    badge:'Origineel Apple',
    img:'images/ipad.jpg',
    gallery:['images/ipad.jpg'],
    meta:'Zeer nette staat · 96% batt · incl. 12 mnd garantie',
    warranty:'12 maanden',
    specs:{scherm:'11" Liquid Retina', chip:'Apple M1', kleur:'Space grey', opslag:'256GB'},
    description:'Originele premium pre-owned iPad Pro. Compleet met doos, zeer nette staat en hoge batterijconditie.'
  },
  {
    id:'macbook-air-m2',
    category:'MacBook',
    title:'MacBook Air M2 8/256GB middernacht',
    price:849, oldPrice:949,
    battery:92, storage:256,
    condition:'Licht gebruikt',
    badge:'Origineel Apple',
    img:'images/macbook.jpg',
    gallery:['images/macbook.jpg'],
    meta:'Licht gebruikt · 92% accuconditie · incl. 12 mnd garantie',
    warranty:'12 maanden',
    specs:{scherm:'13,6" Liquid Retina', chip:'Apple M2', kleur:'Middernacht', opslag:'256GB'},
    description:'Originele premium pre-owned MacBook Air M2. Nette staat met hoge accuconditie, inclusief oplader.'
  },
  {
    id:'apple-watch-s9-45',
    category:'Apple Watch',
    title:'Apple Watch Series 9 45mm',
    price:329, oldPrice:399,
    battery:100, storage:64,
    condition:'Krasvrij',
    badge:'12 maanden garantie',
    img:'images/watch.jpg',
    gallery:['images/watch.jpg'],
    meta:'Krasvrij · 100% batt · incl. 12 mnd garantie',
    warranty:'12 maanden',
    specs:{scherm:'45mm Retina', chip:'S9 SiP', kleur:'Gold milanese', opslag:'64GB'},
    description:'Originele premium pre-owned Apple Watch Series 9. Krasvrije staat met volledige batterijcapaciteit.'
  }
];

window.fmtPrice=function(n){
  var cents=Math.round(n*100)%100;
  if(cents===0) return '€ '+Math.round(n)+',-';
  return '€ '+n.toFixed(2).replace('.',',');
};

window.getProduct=function(id){
  return window.PRODUCTS.find(function(p){ return p.id===id; }) || window.PRODUCTS[0];
};

window.renderProductCard=function(p){
  return '<article class="card">'+
    '<button class="heart" aria-label="Favoriet">♡</button>'+
    '<img src="'+p.img+'" alt="'+p.title+'">'+
    '<span class="badge">'+p.badge+'</span>'+
    '<h3>'+p.title+'</h3>'+
    '<div class="meta">'+p.meta+'</div>'+
    '<div class="price"><b>'+window.fmtPrice(p.price)+'</b><span class="old">'+window.fmtPrice(p.oldPrice)+'</span></div>'+
    '<a class="add" href="product.html?id='+p.id+'" style="text-align:center">Bekijk toestel</a>'+
  '</article>';
};
