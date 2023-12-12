// global variables
var activePage = "home";

// functions
function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.info("page", page);
  page.style.display = "block";
}

function showPage(id) {
  console.info("show page", id);
  hide(activePage);
  show(id);
  activePage = id;
}

function initEvents() {
  var toolbar = document.querySelector("#top-menu-bar");
  toolbar.addEventListener("click", function (e) {
    var page = e.target.innerHTML.toLowerCase();
    console.warn("event", page);
    showPage(page);
  });
}

//Execute on start
showPage(activePage);
initEvents();

// <-- /////////////////////////     TOGGLE BTN DARK MODE START     /////////////////////////// --> //

const body = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle-container");
const theme = localStorage.getItem("theme");

theme && body.classList.add(theme);
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.removeItem("theme");
  }
});

toggleBtn.addEventListener("click", () =>
  toggleBtn.classList.toggle("toggle_active")
);
////////////////////////////////////////////   Dark Mode by Matei  ///////////////////////////////
document.querySelector(".toggle-container").addEventListener("click", () => {
  document.body.classList.toggle("grayscale");
});
