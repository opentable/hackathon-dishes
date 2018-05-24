function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
  function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

let params = getUrlVars();

let hero = params.hero ? ` hero${params.hero}` : "hero-base";
document.body.className += hero;

let dtp = params.dtp ? ` dtp${params.dtp}` : "";
document.body.className += dtp;

let ppc = params.type === "ppc" ? ` ppc` : "";
document.body.className += ppc;

export { params };