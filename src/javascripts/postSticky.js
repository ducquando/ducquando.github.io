function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// Stick the subheader to the page
function stickyHeader() {
  var offetSticky = convertRemToPixels(4.5);
  var subheader = document.getElementById('title-container');
  var trigger = document.getElementById('title-section');
  var position = trigger.getBoundingClientRect().top;

  if (position < offetSticky) {
    subheader.style.display = 'flex';
  } else if (position > offetSticky) {
    subheader.style.display = 'none';
  }
}

// Executes on scroll
window.addEventListener('scroll', function () {
  stickyHeader();
});
