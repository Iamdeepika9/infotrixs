function toggleSection(sectionId) {
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
  document.getElementById(sectionId).classList.add("active");
}