document.getElementById("nav-btn").onclick = function () {
  document.getElementById("nav-btn").classList.toggle("fa-bars");
  document.getElementById("nav-btn").classList.toggle("fa-times");
  document.getElementById("nav-dropdown").classList.toggle("visibility-visible");
  document.getElementById("nav-header").classList.toggle("nav-bgcolor");
  document.getElementById("nav-dropdown").classList.toggle("nav-bgcolor");
}
document.getElementById("livedemo-dropdown").onclick = function () {
  document.getElementById("livedemo").classList.toggle("visibility-visible-nav");
  document.getElementById("livedemo-carret").classList.toggle("fa-caret-down");
  document.getElementById("livedemo-carret").classList.toggle("fa-caret-up");
}
document.getElementById("liveblocks-dropdown").onclick = function () {
  document.getElementById("liveblocks").classList.toggle("visibility-visible-nav");
  document.getElementById("liveblocks-carret").classList.toggle("fa-caret-down");
  document.getElementById("liveblocks-carret").classList.toggle("fa-caret-up");
}


