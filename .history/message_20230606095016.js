const sendMessage = function () {
  const message = composeMessageText.value;
  const subject = composeMessageSubject.value;
  const reciever = composeMessageReciever.value;
  const target = students.find((stu) => stu.fullName === `${reciever}`);
  console.log(message, subject, reciever, target);
  if (target === undefined) {
    alert("Not a valid message reciercer");
  } else {
    reciever.inbox.push(message);
    currentAccount.sent.push(message);
    composeMessageReciever.value = "";
    composeMessageText.value = "";
    composeMessageSubject.value = "";
    alert("Message Sent");
  }
};
