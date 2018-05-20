var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
 all[i].style.background = "rgb(29,31,34)";
 all[i].style.color = "#ccc";
}


// Only for certain tags (like "p" and "div")
var all = document.querySelectorAll("p, div");

for (var i=0, max=all.length; i < max; i++) {
 all[i].style.background = "rgb(29,31,34)";
 all[i].style.color = "#ccc";
}
