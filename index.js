const ticket_back = [
  document.getElementById("impress-back"),
  document.getElementById("mucha-back"),
  document.getElementById("gogh-back"),
];
const ticket_content = [
  document.getElementById("impress-content"),
  document.getElementById("mucha-content"),
  document.getElementById("gogh-content"),
];
const ticket_button = [
  document.getElementById("impress-button"),
  document.getElementById("mucha-button"),
  document.getElementById("gogh-button"),
];
let 가로 = 0;
let 세로 = 0;

function ani(num) {
  const back = ticket_back[num];
  const content = ticket_content[num];
  const button = ticket_button[num];

  back.style.transform = "rotate(25deg)";

  // 가로, 세로 이동
  가로 = 가로 + 70;
  세로 = 세로 + 45;
  back.style.marginLeft = 가로;
  back.style.marginTop = 세로;

  back.style.backgroundColor = "rgba(128, 128, 128, 0)";
  content.style.display = "none";
  button.style.display = "none";
}

const link_list = [
  "../impress-html/impress.html",
  "../mucha-html/mucha.html",
  "../gogh-html/gogh.html",
];
function link(num) {
  setTimeout(() => {
    window.location.href = link_list[num];
  }, 2000);
}
