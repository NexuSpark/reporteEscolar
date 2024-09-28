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
});
