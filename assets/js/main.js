
(function(){
  // smooth in-page scroll for anchor links
  document.addEventListener("click", function(e){
    var a = e.target.closest('a[href^="#"]');
    if(!a) return;
    var id = a.getAttribute("href");
    if(!id || id === "#") return;
    var el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:"smooth", block:"start"});
    history.replaceState(null, "", id);
  });
})();
