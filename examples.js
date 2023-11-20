function variableExamples() {
  console.info(2 + 3);
  console.warn("voichita");
  var employed = true;
  console.log("Angajat:", employed);
  employed = false;
  console.log("Angajat:", employed);
  employed = "da";
  console.log("Angajat:", employed);

  var skills = ["html", "css"];
  console.debug("tipul variabilei skills:", typeof skills);
}

function updateTitle(title) {
  var job = document.getElementById("job-title");
  console.warn("job", job);
  console.info(typeof job);
  job.innerHTML = title;
}
variableExamples();

updateTitle("Developer");
