var nb1 = {t: "RECENT", l: "0%", d: "naba1"};
var nb2 = {t: "ABOUT", l: "33%", d: "naba2"};
var nb3 = {t: "CONTACT", l: "66%", d:"naba3"};

setNav();
setBox(nb1.d, nb1.l);
setBox(nb2.d, nb2.l);
setBox(nb3.d, nb3.l);

var naba1 = document.getElementById("naba1");
var naba2 = document.getElementById("naba2");
var naba3 = document.getElementById("naba3");

setText(nb1.t, "naba1");

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

// x = nb1.t, y = var id;
function setText(x, y) {
  var tst = document.getElementById(y);
  var ts = document.createElement("span");
  var text = document.createTextNode(x);
  ts.appendChild(text);
  ts.className = "navtext";
  y.appendChild(text);
}
