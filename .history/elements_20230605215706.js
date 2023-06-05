const mainContainer = document.getElementById("main-container");
const headerContainer = document.getElementById("header-container");
const studentInformationContainer = document.getElementById(
  "student-information-container"
);
const loginContainer = document.getElementById("login-modal-container");
const composeMessageContainer = document.getElementById(
  "compose-message-container"
);
const addStudentContainer = document.getElementById("create-account-container");
const inboxContainer = document.getElementById("inbox-container");
const timetableContainer = document.getElementById("timetable-container");
const pinResetContainer = document.getElementById("password-reset-container");

const btnDarkModeToggle = document.querySelector(".header-dark-mode-toggle");
const btnLoginHeader = document.getElementById("header-login-button");
const btnInboxOpen = document.getElementById("inbox-open");
const btnTimetableOpen = document.getElementById("timetable-open");
const btnLoginModalOpen = document.querySelector(".login-modal-open");
const btnLoginModalClose = document.getElementById("login-modal-close");
const btnComposeMessageOpen = document.getElementById("compose-message-open");
const btnComposeMessageClose = document.getElementById("compose-message-close");
const btnAddStudentOpen = document.getElementById("add-student");
const btnAddStudentClose = document.getElementById("create-account-close");
const btnStudentManagementClose = document.getElementById(
  "student-management-close"
);
const btnPinResetOpen = document.getElementById("password-reset");
const btnPinResetClose = document.getElementById("password-reset-close");
const btnAddReferal = document.getElementById("add-referal");

const addStudentFirstNameInput = document.getElementById(
  "create-account-first-name"
);
const addStudentLastNameInput = document.getElementById(
  "create-account-last-name"
);
const addStudentYearInput = document.getElementById("create-account-year");
const addStudentPinInput = document.getElementById("create-account-pin");
const addStudentRePinInput = document.getElementById("create-account-repin");
const btndAddStudentSubmit = document.getElementById("create-account-submit");

const loginHeaderFullnameInput = document.getElementById(
  "header-login-input-fullname"
);
const loginHeaderPinInput = document.getElementById("header-login-input-pin");

const studentInformation = document.querySelectorAll(".student-information");
const studentInformationFullName = document.getElementById(
  "student-information-name-header"
);
const studentInformationFirstName = document.getElementById(
  "student-information-first-name"
);
const studentInformationLastName = document.getElementById(
  "student-information-last-name"
);
const studentInformationYear = document.getElementById(
  "student-information-year"
);
const studentInformationReferals = document.getElementById(
  "student-information-referals"
);
