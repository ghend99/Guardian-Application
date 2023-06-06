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
    updateInbox(target, currentAccount, message);
  }
};

const updateInbox = function (target, currentAccount, message) {
  const html = ` <div id="inbox-line">
  <p>${new Date(Date.now()).toLocaleString()}</p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
</div>
  `;
  inboxLine.insertAdjacentHTML("beforebegin", html);
};
