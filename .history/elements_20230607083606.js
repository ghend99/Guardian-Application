////////////////// Containers //////////////////
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
const UpdateTimetableLinkContainer = document.getElementById(
  "sidebar-link-container7"
);
const sidebarContainer = document.getElementById("sidebar-container");

////////////////// General Queries //////////////////
const inputs = document.querySelectorAll(".input");
const buttons = document.querySelectorAll(".submit-button");
const logo = document.querySelector(".header-middle-section-logo");
const studentManagementHeading = document.querySelector(
  ".student-management-heading"
);
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
const addReferalFullName = document.getElementById("add-referal-fullname");
const resetPinOldPin = document.getElementById("password-reset-old");
const resetPinNew = document.getElementById("password-reset-new");
const resetPinNewRetype = document.getElementById("password-reset-new-retype");

////////////////// Buttons //////////////////
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
const btnLoginModalSubmit = document.getElementById("login-modal-submit");
const btnUpdateTimetableLink = document.getElementById("update-timetable");
const btnShowPin = document.getElementById("show-pin-header");
const btndAddStudentSubmit = document.getElementById("create-account-submit");

////////////////// Inpus //////////////////
const addStudentFirstNameInput = document.getElementById(
  "create-account-first-name"
);
const addStudentLastNameInput = document.getElementById(
  "create-account-last-name"
);
const addStudentYearInput = document.getElementById("create-account-year");
const addStudentPinInput = document.getElementById("create-account-pin");
const addStudentRePinInput = document.getElementById("create-account-repin");
const loginHeaderFullnameInput = document.getElementById(
  "header-login-input-fullname"
);
const loginHeaderPinInput = document.getElementById("header-login-input-pin");

const btnResetPinSubmit = document.getElementById("password-reset-submit");

const loginModalFullNameInput = document.getElementById("login-modal-fullname");
const loginModalPinInput = document.getElementById("login-modal-pin");

const composeMessageReciever = document.getElementById(
  "compose-message-reciever"
);
const composeMessageSubject = document.getElementById("compose-message-title");
const composeMessageText = document.getElementById("compose-message-text-area");
const btnComposeMessageSubmit = document.getElementById(
  "compose-message-submit"
);

const inboxLine = document.getElementById("inbox-line");

const btnSidebarOpen = document.getElementById("sidebar-open");
const btnSidebarClose = document.getElementById("sidebar-close");

const btnLoginModalShowPin = document.getElementById("login-modal-show-pin");

const sidebarIcon = document.querySelectorAll(".sidebar-icon");

const btnModalClose = document.querySelectorAll(".modal-close");
