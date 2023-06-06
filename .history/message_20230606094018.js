const sendMessage = function () {
  const message = composeMessageText.value;
  const subject = composeMessageSubject.value;
  const reciever = composeMessageReciever.value;
  const target = students.find((stu) => stu.fullName === `${reciever}`);
  console.log(message, subject, reciever, target);
};
