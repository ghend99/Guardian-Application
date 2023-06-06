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
  // e.preventDefault();
  login();
  studentInformation.forEach((e) => {
    e.style.display = "block";
    inboxContainer.style.display = "none";
    inboxLine.innerHTML = "";
  });
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
  inboxContainer.style.display = "block";
});
