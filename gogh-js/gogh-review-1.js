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

  if (num == 1) {
    document.getElementById("left").style.display = "none";
  }
}

// 다음
function next_btn(page_num) {
  content_main.style.display = "none";
  num++;

  if (num == list_length + 1) {
    page(page_num);

    num = 1;
  } else {
    content_main = content_list[num - 1];
    content_main.style.display = "flex";
  }

  if (num != 1) {
    if (num != 1) {
      document.getElementById("left").style.display = "block";
    }
  }
}

function page(page_num) {
  window.location.href = "gogh-section.html#sec" + page_num;
}
