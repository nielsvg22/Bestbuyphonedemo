(function(){
  var KEY='iselectstore_cart';

  function getCart(){
    try{ return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch(e){ return []; }
  }
  function saveCart(items){
    try{ localStorage.setItem(KEY, JSON.stringify(items)); }catch(e){}
    updateCartBadge();
  }
  function addToCart(item){
    var items=getCart();
    items.push(item);
    saveCart(items);
  }
  function removeFromCart(index){
    var items=getCart();
    items.splice(index,1);
    saveCart(items);
    return items;
  }
  function clearCart(){ saveCart([]); }
  function cartTotal(items){
    items = items || getCart();
    return items.reduce(function(sum,i){ return sum + i.price; }, 0);
  }
  function fmt(n){
    var cents=Math.round(n*100)%100;
    if(cents===0) return '€ '+Math.round(n)+',-';
    return '€ '+n.toFixed(2).replace('.',',');
  }
  function updateCartBadge(){
    var count=getCart().length;
    document.querySelectorAll('.ic .count').forEach(function(el){
      el.textContent=count;
      el.style.display=count?'grid':'none';
    });
  }

  window.iCart={
    getCart:getCart, saveCart:saveCart, addToCart:addToCart,
    removeFromCart:removeFromCart, clearCart:clearCart,
    cartTotal:cartTotal, fmt:fmt, updateCartBadge:updateCartBadge
  };
  document.addEventListener('DOMContentLoaded',updateCartBadge);
})();
