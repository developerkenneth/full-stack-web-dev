const grid = document.querySelector(".grid");
const focused = document.querySelector("#focused");
const imageModal = document.querySelector(".image-modal");
const btnClose = document.querySelector("#close");

function handleClick(e) {
  const target = e.target;
  if (target.tagName === "IMG") {
    const baseUrl = target.getAttribute("src");
    focused.setAttribute("src", baseUrl);
    imageModal.classList.toggle("hide");
  }
}

function handleClose() {
  imageModal.classList.toggle("hide");
}
grid.addEventListener("click", handleClick);
btnClose.addEventListener("click", handleClose);
