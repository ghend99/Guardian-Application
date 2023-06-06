let darkMode = false;
let students = [];
let pins = [];

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

const getSavedPins = function () {
  pinsAccessed = JSON.parse(localStorage.getItem(`pins`));
  if (pinsAccessed !== null) {
    pins.length === 0;
    pins.push(...pinsAccessed);
    console.log(pins);
  } else {
    console.log(`NULL PINS`);
  }
};
getSavedPins();

const getStudentsLocalStorage = () => {
  studentsAccessed = JSON.parse(localStorage.getItem(`students`));
};

const getPinsLocalStorage = () => {
  pinsAccessed = JSON.parse(localStorage.getItem(`pins`));
};

const createStudent = function () {
  let newStudent = new Student(
    addStudentFirstNameInput,
    addStudentLastNameInput,
    addStudentYearInput,
    addStudentPinInput.value,
    addStudentRePinInput.value
  );
  students.push(newStudent);
  pins.push(addStudentPinInput.value);
  localStorage.setItem("students", JSON.stringify(students));
  localStorage.setItem("pins", JSON.stringify(pins));
};

const login = function () {
  getStudentsLocalStorage();
  getPinsLocalStorage();

  const loginName = loginHeaderFullnameInput.value;
  const loginPin = loginHeaderPinInput.value;
  const target = students.find(
    (stu) => stu.fullName === `${loginName}` && stu.pin === `${loginPin}`
  );
  currentAccount = target;
  if (target === undefined) {
    alert("Incorrect login credentials");
  } else {
    loginHeaderFullnameInput.value = "";
    loginHeaderPinInput.value = "";
    loginHeaderPinInput.type = "password";
    studentInformationFullName.textContent = `Student Name: ${target.fullName}`;
    studentInformationFirstName.textContent = `First Name: ${target.firstName}`;
    studentInformationLastName.textContent = `Last Name: ${target.lastName}`;
    studentInformationYear.textContent = `Year Group: ${target.year}`;
    studentInformationReferals.textContent =
      target.referals < 0 ? "Referals: 0" : `Referals: ${target.referals}`;
  }
};

const addReferal = function () {
  getStudentsLocalStorage();
  const searchParameter = addReferalFullName.value;
  const target = students.find((stu) => stu.fullName === `${searchParameter}`);
  if (target === undefined) {
    alert(`Not a valid user`);
  } else {
    target["referals"] = target.referals + 1;
    studentInformationReferals.textContent =
      target.referals < 0 ? "Referals: 0" : `Referals: ${target.referals}`;
    localStorage.setItem("students", JSON.stringify(students));
    addReferalFullName.value = "";
    alert(`Referal Sent`);
  }
};

const resetPin = function () {
  getStudentsLocalStorage();
  getPinsLocalStorage();
  const target = students.find(
    (stu) => stu.fullName === `${currentAccount.fullName}`
  );
  const oldPin = resetPinOldPin.value;
  const newPin = resetPinNew.value;
  if (newPin === target.pin) {
    alert(`Please choose a different pin to current.`);
  } else if (oldPin !== target.pin) {
    alert(`Old pin does not match.`);
  } else if (pins.includes(newPin)) {
    alert(`Pin is already in use`);
  } else {
    target["pin"] = newPin;
    pins.push(newPin);
    console.log(target);
    localStorage.setItem("students", JSON.stringify(students));
    const pinIndex = pins.indexOf(oldPin);
    if (pinIndex > -1) {
      pins.splice(pinIndex, 1);
    }
    localStorage.setItem("pins", JSON.stringify(pins));
  }
};
