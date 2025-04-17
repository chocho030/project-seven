const ticket_back = [
  document.getElementById("impress-back"),
  document.getElementById("mucha-back"),
  document.getElementById("gogh-back"),
];

let 가로 = 0;
let 세로 = 0;

function ani(num) {
  const back = ticket_back[num];

  back.style.transform = "rotate(25deg)";

  // 가로, 세로 이동
  가로 = 가로 + 70;
  세로 = 세로 + 45;
  back.style.marginLeft = 가로;
  back.style.marginTop = 세로;

  back.style.opacity = "0";
}

const link_list = [
  "impress-html/impress.html",
  "mucha-html/mucha.html",
  "gogh-html/gogh.html",
];
function link(num) {
  setTimeout(() => {
    window.location.href = link_list[num];
  }, 2000);
}

// function link(site) {
//   setTimeout(() => {
//     window.location.href = "../" + site + "-html/" + site + ".html";
//   }, 2000);
// }
