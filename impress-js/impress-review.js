// const content_list = [
//   document.getElementById("one"),
//   document.getElementById("two"),
//   document.getElementById("three"),
//   document.getElementById("four"),
// ];

let content_list = document.getElementsByClassName("main-content");
let list_length = content_list.length;

let content_main = content_list[0];
content_main.style.display = "flex";
let num = 1;
console.log(content_list);
console.log("list_length : ", list_length);

console.log("review");
// 이전
function before_btn(page_num) {
  content_main.style.display = "none";
  num--;
  console.log("num : ", num);

  if (num == 0) {
    page(page_num);
  } else {
    content_main = content_list[num - 1];
    content_main.style.display = "flex";
  }

  if (page_num == 0 && num == 1) {
    document.getElementById("left").style.display = "none";
  }
}

// 다음
function next_btn(page_num) {
  document.getElementById("left").style.display = "block";

  content_main.style.display = "none";
  num++;
  console.log("num : ", num);

  if (num == list_length + 1) {
    page(page_num);

    num = 1;
  } else {
    content_main = content_list[num - 1];
    content_main.style.display = "flex";
  }
}

function page(page_num) {
  if (page_num == 7) {
    document.getElementById("go-home").style.display = "flex";
    document.getElementById("right").style.display = "none";
  } else {
    window.location.href = "impress-section.html#sec" + page_num;
  }
}
