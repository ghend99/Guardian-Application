let darkMode = false;
let students = [];
let pins = [];
let currentAccount;

const darkModeToggle = function () {
  darkMode = true;
  mainContainer.classList.add("dark-mode");
  loginContainer.classList.add("dark-mode");
  composeMessageContainer.classList.add("dark-mode");
  addStudentContainer.classList.add("dark-mode");
  inputs.forEach((e) => {
    e.classList.add("input-dark-mode");
  });
  // buttons.forEach((e) => {
  //   e.classList.add("button-dark-mode");
  // });
  sidebarIcon.forEach((e) => {
    e.src = "./images/menu-white.png";
  });
  btnModalClose.forEach((e) => {
    e.src = "./images/close-white.png";
  });
  btnDarkModeToggle.src = "./images/light-mode.png";
  btnLoginHeader.src = "./images/login-button-white.png";
  btnLoginModalOpen.src = "./images/login-white.png";
  logo.src = "./images/logo-white.png";
  btnStudentManagementClose.src = "./images/close-white.png";
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
  // buttons.forEach((e) => {
  //   e.classList.remove("button-dark-mode");
  // });
  sidebarIcon.forEach((e) => {
    e.src = "./images/menu.png";
  });
  btnModalClose.forEach((e) => {
    e.src = "./images/close.png";
  });
  btnDarkModeToggle.src = "./images/dark-mode.png";
  btnLoginHeader.src = "./images/login-button.png";
  btnLoginModalOpen.src = "./images/login.png";
  logo.src = "./images/logo.png";
  btnStudentManagementClose.src = "./images/close.png";
};

const Student = class {
  constructor(
    firstName,
    lastName,
    fullName,
    inbox,
    sent,
    from,
    subject,
    date,
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
    this.from = [];
    this.subject = [];
    this.date = [];
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
    // console.log(students);
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
    // console.log(pins);
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
    if()


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
    updateInboxLoad(currentAccount);
    if (target.lessons1.length > 1) {
      showStudentTiemtable();
    } else {
      resetTimetableInputs();
    }
  }
};

const loginModal = function () {
  getStudentsLocalStorage();
  getPinsLocalStorage();
  const loginName = loginModalFullNameInput.value;
  const loginPin = loginModalPinInput.value;
  console.log(loginName, loginPin);
  const target = students.find(
    (stu) => stu.fullName === `${loginName}` && stu.pin === `${loginPin}`
  );
  currentAccount = target;
  if (target === undefined) {
    alert("Incorrect login details");
  } else {
    loginModalFullNameInput.value = "";
    loginModalPinInput.value = "";
    loginModalPinInput.type = "password";
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

const showPin = function () {
  if (loginHeaderPinInput.type === "password") {
    loginHeaderPinInput.type = "number";
  } else if (loginHeaderPinInput.type === "number") {
    loginHeaderPinInput.type = "password";
  }
};

const showPinLoginModal = function () {
  if (loginModalPinInput.type === "password") {
    loginModalPinInput.type = "number";
  } else if (loginHeaderPinInput.type === "number") {
    loginModalPinInput.type = "password";
  }
};
