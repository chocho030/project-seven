const ticket_back = document.getElementById("ticket-back");
const ticket_content = document.getElementById("ticket-content");
const ticket_button = document.getElementById("ticket-button");
let 가로 = 0;
let 세로 = 0;

function ani() {
  ticket_back.style.transform = "rotate(25deg)";

  // 가로, 세로 이동
  가로 = 가로 + 70;
  세로 = 세로 + 45;
  ticket_back.style.marginLeft = 가로;
  ticket_back.style.marginTop = 세로;

  ticket_back.style.backgroundColor = "rgba(128, 128, 128, 0)";
  ticket_content.style.display = "none";
  ticket_button.style.display = "none";
}

function link() {
  setTimeout(() => {
    window.location.href = "../gogh-html/gogh.html";
  }, 2000);
}
