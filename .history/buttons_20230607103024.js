btnDarkModeToggle.addEventListener("click", function (e) {
  e.preventDefault();
  if (darkMode === false) {
    darkModeToggle();
  } else {
    lightModeToggle();
  }
});

btnAddStudentOpen.addEventListener("click", function (e) {
  e.preventDefault();
  addStudentContainer.style.display = "block";
  mainContainer.style.filter = "blur(3px)";
});

btnAddStudentClose.addEventListener("click", function (e) {
  e.preventDefault();
  addStudentContainer.style.display = "none";
  mainContainer.style.filter = "blur(0px)";
});

btndAddStudentSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  createStudent();
  addStudentFirstNameInput.value = "";
  addStudentLastNameInput.value = "";
  addStudentYearInput.value = "";
  addStudentPinInput.value = "";
  addStudentRePinInput.value = "";
});

btnLoginHeader.addEventListener("click", function (e) {
  e.preventDefault();
  login();
  studentInformation.forEach((e) => {
    e.style.display = "block";
  });
  inboxContainer.style.display = "none";
  timetableContainer.style.display = "none";
  inboxLine.innerHTML = "";
  UpdateTimetableLinkContainer.style.display = "none";
  studentManagementHeading.textContent = "";
  btnStudentManagementClose.style.display = "none";
});

btnLoginModalOpen.addEventListener("click", function (e) {
  e.preventDefault();
  loginContainer.style.display = "block";
  mainContainer.style.filter = "blur(3px)";
});

btnLoginModalClose.addEventListener("click", function (e) {
  e.preventDefault();
  loginContainer.style.display = "none";
  mainContainer.style.filter = "blur(0px)";
});

btnLoginModalSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  loginModal();
  studentInformation.forEach((e) => {
    e.style.display = "block";
  });
  loginContainer.style.display = "none";
  mainContainer.style.filter = "blur(0px)";
});

btnComposeMessageOpen.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentAccount === undefined) {
    alert("You need to login first");
  } else {
    composeMessageContainer.style.display = "block";
    mainContainer.style.filter = "blur(3px)";
  }
});

btnComposeMessageClose.addEventListener("click", function (e) {
  composeMessageContainer.style.display = "none";
  mainContainer.style.filter = "blur(0px)";
});

btnComposeMessageSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  sendMessage();
});

btnInboxOpen.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentAccount === undefined) {
    alert("You need to login first");
  } else {
    timetableContainer.style.display = "none";
    inboxContainer.style.display = "block";
    studentManagementHeading.textContent = "Inbox";
    btnStudentManagementClose.style.display = "block";
    UpdateTimetableLinkContainer.style.display = "none";
  }
});

btnTimetableOpen.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentAccount === undefined) {
    alert("You need to login first");
  } else {
    inboxContainer.style.display = "none";
    timetableContainer.style.display = "grid";
    UpdateTimetableLinkContainer.style.display = "flex";
    studentManagementHeading.textContent = "Timetable";
    btnStudentManagementClose.style.display = "block";
    btnUpdateTimetableLink.disabled = false;
  }
});

btnStudentManagementClose.addEventListener("click", function (e) {
  timetableContainer.style.display = "none";
  inboxContainer.style.display = "none";
  studentManagementHeading.textContent = "";
  btnStudentManagementClose.style.display = "none";
  UpdateTimetableLinkContainer.style.display = "non";
});

btnUpdateTimetableLink.addEventListener("click", function (e) {
  updateTimetableLink();
});

btnSidebarOpen.addEventListener("click", function (e) {
  e.preventDefault();
  sidebarContainer.style.display = "grid";
  btnSidebarOpen.style.display = "none";
  btnSidebarClose.style.display = "block";
});

btnSidebarClose.addEventListener("click", function (e) {
  e.preventDefault();
  sidebarContainer.style.display = "none";
  btnSidebarOpen.style.display = "block";
  btnSidebarClose.style.display = "none";
});

btnShowPin.addEventListener("click", function (e) {
  e.preventDefault();
  showPin();
});

btnLoginModalShowPin.addEventListener("click", function (e) {
  e.preventDefault();
  showPinLoginModal();
});

btnAddReferal.addEventListener("click", function (e) {
  e.preventDefault();
  addReferal();
});

btnSearchStudent.addEventListener("click", function (e) {
  e.preventDefault();
  searchStudent();
});

btnPinResetOpen.addEventListener("click");
