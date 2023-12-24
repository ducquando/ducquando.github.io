var openState = false;

// Get elements
object = document.getElementById('nav-burger');
openSymbol = document.getElementById('burger-open');
closeSymbol = document.getElementById('burger-close');
navView = document.getElementById('nav-mobile');

// Change state
function changeState() {
  if (openState) {
    // $("body").css("overflow-y", "visible");
    openSymbol.style.display = 'block';
    closeSymbol.style.display = 'none';
    navView.style.display = 'none';
    openState = false;
  } else {
    // $("body").css("overflow-y", "hidden");
    openSymbol.style.display = 'none';
    closeSymbol.style.display = 'block';
    navView.style.display = 'flex';
    openState = true;
  }
}

// Change onclick
object.addEventListener('click', function () {
  changeState();
});
