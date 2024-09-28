document.addEventListener("DOMContentLoaded", () => {
  const showGrades = document.getElementById("showGrades");
  const showAverage = document.getElementById("showAverage");
  const showHighScore = document.getElementById("showHighScore");
  const showIfFailingGrades = document.getElementById("showIfFailingGrades");
  const container = document.getElementById("container");

  const grades = [
    ["Matemáticas", 8.5],
    ["Historia", 9.0],
    ["Ciencias", 8.8],
    ["Literatura", 9.2],
    ["Educación física", 9.5],
    ["Inglés", 8.7],
    ["Arte", 9.3],
  ];

  showGrades.addEventListener("click", (event) => {
    event.preventDefault();
    let content =
      "<table><thead><tr><th>Materia</th><th>Calificación</th></tr></thead><tbody>";
    for (let grade of grades) {
      content += `<tr><td>${grade[0]}</td><td>${grade[1]}</td></tr>`;
    }
    content += "</tbody></table>";
    container.innerHTML = content;
  });

  showAverage.addEventListener("click", (event) => {
    event.preventDefault();
    let total = 0;
    let average;
    for (let i = 0; i < grades.length; i++) {
      total += grades[i][1];
    }
    average = total / grades.length;
    container.innerHTML = `<p>El promedio de las calificaciones es: ${average}.</p>`;
  });

  showHighScore.addEventListener("click", (event) => {
    event.preventDefault();
    let max = 0;
    let subject;
    let i = grades.length - 1;
    while (i >= 0) {
      if (grades[i][1] > max) {
        max = grades[i][1];
        subject = grades[i][0];
      }
      i--;
    }
    container.innerHTML = `<p>La mejor calificación fue: ${max} en ${subject}.</p>`;
  });

  showIfFailingGrades.addEventListener("click", (event) => {
    event.preventDefault();
    let hasFailingGrades = false;
    let i = 0;
    do {
      if (grades[i][1] < 6) {
        hasFailingGrades = true;
        break;
      }
    } while (++i < grades.length);
    if (hasFailingGrades) {
      container.innerHTML = "<p>Estudiante tiene aplazos.</p>";
    } else {
      container.innerHTML = "<p>Estudiante no tiene aplazos.</p>";
    }
  });
});
