var nav = document.getElementById("nav");
var counter = 1;
console.log(nav);
function toggleMenu() {
  counter += 1;
  if (counter % 2 == 0) {
    nav.style.width = "70%";
    console.log("");
  } else {
    nav.style.width = "0";
  }
}
