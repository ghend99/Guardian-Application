const sendMessage = function () {
  const message = composeMessageText.value;
  const subject = composeMessageSubject.value;
  const reciever = composeMessageReciever.value;
  const target = students.find((stu) => stu.fullName === `${reciever}`);
  console.log(message, subject, reciever, target);
  if (target === undefined) {
    alert("Not a valid message reciercer");
  } else {
    target.inbox.push(message);
    currentAccount.sent.push(message);
    composeMessageReciever.value = "";
    composeMessageText.value = "";
    composeMessageSubject.value = "";
    alert("Message Sent");
    updateInbox(target, currentAccount, message, subject);
  }
};

const updateInbox = function (target, currentAccount, message, subject) {
  const html = ` <div id="inbox-line">
  <p>${new Date(Date.now()).toLocaleString()}</p>
  <p>${currentAccount.fullName}</p>
  <p>${target.fullName}</p>
  <p>${subject}</p>
  <p>${message}</p>
</div>
  `;
  inboxLine.insertAdjacentHTML("beforebegin", html);
};

const updateInboxLoad = function (currentAccount) {
  getStudentsLocalStorage();
  console.log(currentAccount);
};
updateInboxLoad();
