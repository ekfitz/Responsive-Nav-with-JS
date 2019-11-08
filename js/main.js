var nb1 = {t: "RECENT", l: "0%", d: "nb1"};
var nb2 = {t: "ABOUT", l: "33%", d: "nb2"};
var nb3 = {t: "CONTACT", l: "66%", d:"nb3"};

setNav();
setBox(nb1.d, nb1.l);
setBox(nb2.d, nb2.l);
setBox(nb3.d, nb3.l);

function setNav() {
  var nav = document.createElement("div");
  nav.className = "nav";
  nav.id = "navBox";
  document.body.appendChild(nav);
}

function setBox(x, y) {
  var navbox = document.getElementById("navBox");
  var box = document.createElement("div");
  box.className = "box";
  box.id = x;
  box.style.left = y;
  navbox.appendChild(box);
}
