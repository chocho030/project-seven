const content_list = [
  document.getElementById("one"),
  document.getElementById("two"),
  document.getElementById("three"),
  document.getElementById("four"),
];
let list_length = content_list.length;

let content_main = document.getElementById("one");
content_main.style.display = "flex";
let num = 1;

// 이전
function before_btn(page_num) {
  content_main.style.display = "none";
  num--;

  if (num == 0) {
    page(page_num);
  } else {
    content_main = content_list[num - 1];
    content_main.style.display = "flex";
  }
}

// 다음
function next_btn(page_num) {
  document.getElementById("left").style.display = "block";

  content_main.style.display = "none";
  num++;

  if (num == list_length + 1) {
    page(page_num);

    num = 1;
  } else {
    content_main = content_list[num - 1];
    content_main.style.display = "flex";
  }
}

function page(page_num) {
  window.location.href = "gogh-section.html#sec" + page_num;

  if (page_num == 6) {
    window.location.href = "../index.html";
  }
}
