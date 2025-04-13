const content_list = [
  document.getElementById("one"),
  document.getElementById("two"),
  document.getElementById("three"),
  document.getElementById("four"),
];
let list_length = content_list.length;

let content_main = document.getElementById("one");
content_main.style.display = "flex";
let num = 0;

function before_btn() {
  content_main.style.display = "none";
  num--;
  content_main = content_list[num];
  content_main.style.display = "flex";

  if (num == 0) {
    document.getElementById("left").style.display = "none";
  }
  if (num != list_length - 1) {
    document.getElementById("right").style.display = "block";
  }
}
function next_btn() {
  content_main.style.display = "none";
  num++;
  content_main = content_list[num];
  content_main.style.display = "flex";

  if (num != 0) {
    document.getElementById("left").style.display = "block";
  }
  if (num == list_length - 1) {
    document.getElementById("right").style.display = "none";
  }
}
