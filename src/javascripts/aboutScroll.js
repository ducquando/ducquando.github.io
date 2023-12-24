var sections = {
  'Product%20Development': 'Product Development',
  'Software%20Engineering': 'Software Engineering',
  'Data%20Science%20and%20AI': 'Data Science and AI',
  'Graphic%20Design': 'Graphic Design',
};
const yOffset = 80;

function scrollToSection(section) {
  var element = document.getElementById(section);
  var y = window.scrollY + element.getBoundingClientRect().top - yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

$(document).ready(function () {
  for (const [key, value] of Object.entries(sections)) {
    if (window.location.href.includes(key)) {
      scrollToSection(value);
    }
  }
});
