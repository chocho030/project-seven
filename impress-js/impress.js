now = 0;

function list() {
  if (now == 0) {
    document.getElementById("nav-list-content").style.display = "flex";
    now = 1;
  } else {
    document.getElementById("nav-list-content").style.display = "none";
    now = 0;
  }
}
