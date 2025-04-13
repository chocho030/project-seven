// const gallery_div = document.getElementById("gallery-list-content");
// const gallery_text = document.getElementById("gallery-list-text");

// gallery_div.addEventListener("mouseover", (event) => {
//   console.log("마우스 올라옴");
//   gallery_text.style.display = "block";
// });
// gallery_div.addEventListener("mouseout", (event) => {
//   console.log("마우스 내려감");
//   gallery_text.style.display = "none";
// });

const gallery_div1 = document.getElementById("gallery-list-content-1");
const gallery_text1 = document.getElementById("gallery-list-text-1");

gallery_div1.addEventListener("mouseover", (event) => {
  gallery_text1.style.display = "block";
});
gallery_div1.addEventListener("mouseout", (event) => {
  gallery_text1.style.display = "none";
});

const gallery_div2 = document.getElementById("gallery-list-content-2");
const gallery_text2 = document.getElementById("gallery-list-text-2");
gallery_div2.addEventListener("mouseover", (event) => {
  gallery_text2.style.display = "block";
});
gallery_div2.addEventListener("mouseout", (event) => {
  gallery_text2.style.display = "none";
});

const gallery_div3 = document.getElementById("gallery-list-content-3");
const gallery_text3 = document.getElementById("gallery-list-text-3");
gallery_div3.addEventListener("mouseover", (event) => {
  gallery_text3.style.display = "block";
});
gallery_div3.addEventListener("mouseout", (event) => {
  gallery_text3.style.display = "none";
});
