const hover_div = document.getElementById("hover-div");
const hover_text = document.getElementById("hover-text");
hover_div.addEventListener("mouseover", (event) => {
  console.log("test");
  hover_text.style.display = "none";
});
hover_div.addEventListener("mouseout", (event) => {
  console.log(event);
  hover_text.style.display = "block";
});

const img_list = ["hero1", "hero2"];

let num = 0;

function btn_click() {
  hero_img.style.display = "none";
  let hero_img = document.getElementById(img_list[num]);
  hero_img.style.display = "block";
  num++;
}
