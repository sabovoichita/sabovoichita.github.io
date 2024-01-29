// global variables
let activePage = "home";

// functions
function $(selector) {
  const el = document.querySelector(selector);
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
  const prevLink = $("a[data-page=" + activePage + "]");
  prevLink.classList.remove("active");
  hide(activePage);

  const nextLink = $(`a[data-page=${id}]`);
  nextLink.classList.add("active");
  show(id);
  activePage = id;
}

function initEvents() {
  const toolbar = $("#top-menu-bar");
  toolbar.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      const page = e.target.dataset.page;
      console.warn("click %o", page);
      showPage(page);
    }
  });
}
function sortSkillsByEndorcements(a, b) {
  console.info("sort", a, b);
  return b.endorcements - a.endorcements;
}

function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}
function sortProjects(a, b) {
  return a.Project.localeCompare(b.Project);
}

function showSkills(skills) {
  skills.sort(sortByName);
  // skills.sort(sortSkillsByEndorcements);

  const ul = $("#skills ul");

  const text = skills.map(function (skill) {
    let cls = "";
    if (skill.favorite == true) {
      cls = "favorite";
    }

    console.info("%o (%o)", skill.favorite, cls);
    return `<li class="${cls}">${skill.name}<span> - ${skill.endorcements}</span></li>`;
  });
  console.warn(text);

  ul.innerHTML = text.join("");
}
// function showProjects(projects) {
//   projects.sort(sortProjects);
//   var ulProjects = $("#projects ul");

//   var textP= projects.map(function(project){
//     var clsP = "";
//     if (project.Completed == true){
//       clsP="Completed";
//     });
//   ulProjects.innerHTML = textP.join("");
// }

function loadSkills() {
  fetch("skills.json").then(function (r) {
    r.json().then(function (skills) {
      showSkills(skills);
    });
  });
}
// function loadProjects() {
//   fetch("projects.json").then(function (r) {
//     r.json().then(function (skills) {
//       showProjects(projects);
//     });
//   });
// }

function loadLanguages() {
  fetch("languages.json")
    .then((response) => response.json())
    .then((languages) => {
      printJsonIntoTable(languages, "languages-table");
    });
}

function printJsonIntoTable(jsonData, elementId) {
  var col = [];
  for (var i = 0; i < jsonData.length; i++) {
    for (var key in jsonData[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  //This Code creates HTML table
  var table = document.createElement("table");
  //This Code gets rows for header creader above.
  var tr = table.insertRow(-1);
  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
  }
  //This Code adds data to table as rows
  for (var i = 0; i < jsonData.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = jsonData[i][col[j]];
    }
  }
  //This Code gets the all columns for header
  var divContainer = document.getElementById(elementId);
  divContainer.innerHTML = " ";
  divContainer.appendChild(table);
}
//Execute on start
showPage(activePage);
initEvents();
loadSkills();
loadLanguages();
// loadProjects();

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
