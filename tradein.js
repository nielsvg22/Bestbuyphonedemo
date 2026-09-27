(function(){
  var MODELS=[
    {name:'iPhone 13', value:180},
    {name:'iPhone 14', value:240},
    {name:'iPhone 15', value:320},
    {name:'iPhone 16', value:420},
    {name:'iPad (2020 of nieuwer)', value:150},
    {name:'MacBook Air/Pro (M1 of nieuwer)', value:280},
    {name:'Apple Watch (Series 6 of nieuwer)', value:90}
  ];
  var CONDITIONS=[
    {name:'Zoals nieuw', mult:1},
    {name:'Lichte gebruikssporen', mult:.85},
    {name:'Zichtbare slijtage', mult:.65},
    {name:'Beschadigd, werkt nog', mult:.4}
  ];

  var state={step:1};

  function fmt(n){ return '€ '+Math.round(n); }

  function build(){
    var overlay=document.createElement('div');
    overlay.className='tiOverlay';
    overlay.id='tiOverlay';
    overlay.innerHTML='<div class="tiModal"><button class="tiClose" id="tiClose" aria-label="Sluiten">×</button><div id="tiBody"></div></div>';
    document.body.appendChild(overlay);
    document.getElementById('tiClose').addEventListener('click',close);
    overlay.addEventListener('click',function(e){ if(e.target===overlay) close(); });
  }

  function open(){
    state={step:1};
    if(!document.getElementById('tiOverlay')) build();
    render();
    document.getElementById('tiOverlay').classList.add('open');
    document.body.classList.add('locked');
  }
  function close(){
    var ov=document.getElementById('tiOverlay');
    if(ov) ov.classList.remove('open');
    document.body.classList.remove('locked');
  }

  function render(){
    var body=document.getElementById('tiBody');
    if(state.step===1){
      body.innerHTML=
        '<p class="tiEyebrow">Stap 1 van 3</p>'+
        '<h3>Welk toestel wil je inruilen?</h3>'+
        '<div class="tiGrid">'+MODELS.map(function(m,i){ return '<button class="tiOption" data-i="'+i+'">'+m.name+'</button>'; }).join('')+'</div>';
      body.querySelectorAll('.tiOption').forEach(function(btn){
        btn.addEventListener('click',function(){
          state.model=MODELS[parseInt(btn.dataset.i,10)];
          state.step=2;
          render();
        });
      });
    } else if(state.step===2){
      body.innerHTML=
        '<p class="tiEyebrow">Stap 2 van 3</p>'+
        '<h3>In welke conditie is je '+state.model.name+'?</h3>'+
        '<div class="tiGrid">'+CONDITIONS.map(function(c,i){ return '<button class="tiOption" data-i="'+i+'">'+c.name+'</button>'; }).join('')+'</div>'+
        '<button class="tiBack" id="tiBack1">← Terug</button>';
      body.querySelector('#tiBack1').addEventListener('click',function(){ state.step=1; render(); });
      body.querySelectorAll('.tiOption').forEach(function(btn){
        btn.addEventListener('click',function(){
          state.condition=CONDITIONS[parseInt(btn.dataset.i,10)];
          state.step=3;
          render();
        });
      });
    } else {
      var est=state.model.value*state.condition.mult;
      body.innerHTML=
        '<p class="tiEyebrow">Geschatte inruilwaarde</p>'+
        '<div class="tiEstimate">'+fmt(est)+'</div>'+
        '<p class="tiNote">Voor je '+state.model.name+' in staat "'+state.condition.name+'". Dit is een indicatie — de definitieve waarde bepalen we na persoonlijke beoordeling van het toestel.</p>'+
        '<a class="btn primary" style="width:100%;justify-content:center" href="https://wa.me/31643295022" target="_blank" rel="noopener">Vraag deze inruilwaarde aan via WhatsApp →</a>'+
        '<button class="tiBack" id="tiBack2">← Opnieuw beginnen</button>';
      body.querySelector('#tiBack2').addEventListener('click',function(){ state={step:1}; render(); });
    }
  }

  document.addEventListener('click',function(e){
    var trigger=e.target.closest('.js-tradein-trigger');
    if(trigger){ e.preventDefault(); open(); }
  });
})();
