btnDarkModeToggle.addEventListener("click", function (e) {
  e.preventDefault();
  if (darkMode === false) {
    darkModeToggle();
  } else {
    lightModeToggle();
  }
});
