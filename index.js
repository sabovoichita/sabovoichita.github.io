// global variables
var activePage = "skills";

// functions
function $(selector) {
  var el = document.querySelector(selector);
  // console.info("%o found: ", selector, el);
  return el;
}
function hide(id) {
  console.info("hide", id);
  $("#" + id).style.display = "none";
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.info("show", id);
  var page = $(`#${id}`);
  console.info("page", page);
  page.style.display = "block";
}

function showPage(id) {
  console.info("show page", id);
  var prevLink = $("a[data-page=" + activePage + "]");
  prevLink.classList.remove("active");
  hide(activePage);

  var nextLink = $(`a[data-page=${id}]`);
  nextLink.classList.add("active");
  show(id);
  activePage = id;
}

function initEvents() {
  var toolbar = $("#top-menu-bar");
  toolbar.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      var page = e.target.dataset.page;
      console.warn("click", page);
      showPage(page);
    }
  });
}

function showSkills() {
  var ul = $("#skills ul");

  var skills = [
    { name: "HTML", endorcements: 6, favorite: true },
    { name: "CSS", endorcements: 5 },
    { name: "JS", endorcements: 4, favorite: true },
    { name: "word", endorcements: 1, favorite: false },
  ];

  var text = skills.map(function (skill) {
    var cls = "";
    if (skill.favorite == true) {
      cls = "favorite";
    }
    console.info("%o (%o)", skill.favorite, cls);
    return `<li class="${cls}">${skill.name}<span> - ${skill.endorcements}</span></li>`;
  });
  console.warn(text);

  ul.innerHTML = text.join("");
}
//Execute on start
showSkills();
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
