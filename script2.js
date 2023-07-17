const lightModeCheckbox = document.getElementById('lightmode_checkbox');
const body = document.body;

lightModeCheckbox.addEventListener('change', function () {
  if (lightModeCheckbox.checked) {
    enableLightMode();
  } else {
    disableLightMode();
  }
});

function enableLightMode() {
  body.classList.add('light-mode');
}

function disableLightMode() {
  body.classList.remove('light-mode');
}
