var img = document.getElementById('footer-logo');

function logoRotate(evt) {
  // Get degree
  var centerX = img.clientWidth / 2 + img.offsetLeft;
  var radians = Math.atan2(evt.pageX - centerX, document.body.clientWidth);
  var degree = radians * (180 / Math.PI);

  // Set angle
  img.style.transform = 'rotate(' + degree + 'deg)';
}

// React on mouse move
document.addEventListener('mousemove', function (e) {
  logoRotate(e);
});
