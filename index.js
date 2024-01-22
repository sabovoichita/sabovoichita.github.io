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

function showSkills(skills) {
  var ul = $("#skills ul");

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

function loadSkills() {
  fetch("skills.json").then(function (r) {
    r.json().then(function (skills) {
      showSkills(skills);
    });
  });
}

//Execute on start
showPage(activePage);
initEvents();
loadSkills();

// function showRubik() {
//   var rubik = $("rubik div");
//   var cube = ["red", "green", "blue"].map(function () {
//     return "<div></div>";
//     rubik.innerHTML = cube;
//   });
// }

console.warn("after");
function rubik() {
  const div1 = document.createElement("div");
  $("#rubik div").appendChild(div1);

  const div2 = document.createElement("div");
  $("#rubik div").appendChild(div2);

  const div3 = document.createElement("div");
  $("#rubik div").appendChild(div3);

  const div4 = document.createElement("div");
  $("#rubik div").appendChild(div4);

  const div5 = document.createElement("div");
  $("#rubik div").appendChild(div5);

  const div6 = document.createElement("div");
  $("#rubik div").appendChild(div6);

  const div7 = document.createElement("div");
  $("#rubik div").appendChild(div7);

  const div8 = document.createElement("div");
  $("#rubik div").appendChild(div8);

  const div9 = document.createElement("div");
  $("#rubik div").appendChild(div9);
}
rubik();

// Function to Create a table with JS

// function rubikTable() {
//   const tbl = document.createElement("table");
//   $("#rubik div").appendChild(tbl);
//   const tblBody = document.createElement("tbody");
//   $("#rubik div").appendChild(tblBody);
//   for (let i = 0; i < 3; i++) {
//     const row = document.createElement("tr");
//     for (let j = 0; j < 3; j++) {
//       const cell = document.createElement("td");
//       row.appendChild(cell);
//     }
//     tblBody.appendChild(row);
//   }
//   tbl.appendChild(tblBody);
//   tbl.setAttribute("border", "2");
// }
// rubikTable();

// function myFunction() {
//   var x = document.getElementById("rubik-face").rows[0].cells;
//   x[0].innerHTML = "NEW CONTENT";
// }

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
