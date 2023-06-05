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

const lightModeToggle = function () {
  darkMode = false;
  mainContainer.classList.remove("dark-mode");
  loginContainer.classList.remove("dark-mode");
  composeMessageContainer.classList.remove("dark-mode");
  addStudentContainer.classList.remove("dark-mode");
  inputs.forEach((e) => {
    e.classList.remove("input-dark-mode");
  });
  buttons.forEach((e) => {
    e.classList.remove("button-dark-mode");
  });
  btnDarkModeToggle.src = "./images/dark-mode.png";
  btnLoginHeader.src = "./images/login-button.png";
  btnLoginModalOpen.src = "./images/login.png";
  logo.src = "./images/logo.png";
};

const Student = class {
  constructor(
    firstName,
    lastName,
    fullName,
    inbox,
    sent,
    pin,
    referals,
    year,
    lessons
  ) {
    this.firstName = firstName.value.trim();
    this.lastName = lastName.value.trim();
    this.fullName = firstName.value.trim() + " " + lastName.value.trim();
    this.year = addStudentYearInput.value;
    this.inbox = [];
    this.sent = [];
    this.pin = addStudentPinInput.value;
    this.referals = 0;
    this.lessons1 = [];
    this.lessons2 = [];
    this.lessons3 = [];
    this.lessons4 = [];
    this.lessons5 = [];
  }
};

const getSavedStudents = function () {
  studentsAccessed = JSON.parse(localStorage.getItem(`students`));
  if (studentsAccessed !== null) {
    students.length === 0;
    students.push(...studentsAccessed);
    console.log(students);
  } else {
    console.log(`NULL`);
    return;
  }
};
getSavedStudents();
