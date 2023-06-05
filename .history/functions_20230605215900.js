let darkMode = false;

const darkModeToggle = function () {
  darkMode = true;
  mainContainer.classList.add("dark-mode");
  loginContainer.classList.add("dark-mode");
  composeMessageContainer.classList.add("dark-mode");
  addStudentContainer.classList.add("dark-mode");
  inputs.forEach((e) => {
    e.classList.add("input-dark-mode");
  });
  buttons.forEach((e) => {
    e.classList.add("button-dark-mode");
  });
  btnDarkModeToggle.src = "./images/light-mode.png";
  btnLoginHeader.src = "./images/login-button-white.png";
  btnLoginModalOpen.src = "./images/login-white.png";
  logo.src = "./images/logo-white.png";
};
