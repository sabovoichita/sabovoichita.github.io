let activePage = "home";

function $(selector) {
  const el = document.querySelector(selector);
  return el;
}

function hide(id) {
  $("#" + id).style.display = "none";
  document.getElementById(id).style.display = "none";
}

function show(id) {
  var page = $(`#${id}`);
  page.style.display = "block";
}

function showPage(id) {
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
  toolbar.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      const page = e.target.dataset.page;
      showPage(page);
    }
  });
}

function sortSkillsByEndorcements(a, b) {
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

  const ul = $("#skills ul");

  const text = skills.map((skill) => {
    let cls = "";
    if (skill.favorite == true) {
      cls = "favorite";
    }

    return `<li class="${cls}">${skill.name}<span> - ${skill.endorcements}</span></li>`;
  });

  ul.innerHTML = text.join("");
}

function loadSkills() {
  fetch("skills.json").then((r) => {
    r.json().then((skills) => {
      showSkills(skills);
    });
  });
}

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

  var table = document.createElement("table");
  var tr = table.insertRow(-1);
  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
  }
  for (var i = 0; i < jsonData.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = jsonData[i][col[j]];
    }
  }
  var divContainer = document.getElementById(elementId);
  divContainer.innerHTML = " ";
  divContainer.appendChild(table);
}

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
document.querySelector(".toggle-container").addEventListener("click", () => {
  document.body.classList.toggle("grayscale");
});

showPage(activePage);
initEvents();
loadSkills();
loadLanguages();
rubik();
