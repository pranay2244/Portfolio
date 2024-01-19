// Toggle dark mode and light mode
const modeToggleCircleBig = document.getElementById("modeToggleCircleBig");
const darkModeTogglerBig = document.getElementById("darkModeTogglerBig");

const modeToggleCircle = document.getElementById("modeToggleCircle");
const darkModeToggler = document.getElementById("darkModeToggler");

const body = document.body;
darkModeTogglerBig.addEventListener("change", () => {
  body.classList.toggle("dark");
  modeToggleCircleBig.classList.toggle("left-0");
  modeToggleCircle.classList.toggle("left-0");
});

// Toggle dark mode and light mode

darkModeToggler.addEventListener("change", () => {
  body.classList.toggle("dark");
  modeToggleCircle.classList.toggle("left-0");
  modeToggleCircleBig.classList.toggle("left-0");
});

function navDisplay() {
  const smallNavMenuItems = document.querySelector(".smallNavMenuItems");
  const smallNavIcon = document.querySelector(".small-nav-icon");
  smallNavMenuItems.classList.toggle("hidden");
  smallNavIcon.classList.toggle("fa-ellipsis-v");
  smallNavIcon.classList.toggle("fa-times");
}
