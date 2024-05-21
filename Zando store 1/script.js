const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

// Initial invocation to set the correct initial position
slideImage();

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;
  const translateXValue = -(imgId - 1) * displayWidth;

  // Check if the translateX value is less than 0, indicating that it's not going beyond the first image
  if (translateXValue < 0) {
    document.querySelector(
      ".img-showcase"
    ).style.transform = `translateX(${translateXValue}px)`;
  } else {
    // If it's beyond the first image, set the transform to 0
    document.querySelector(".img-showcase").style.transform = `translateX(0px)`;
  }
}

window.addEventListener("resize", slideImage);
