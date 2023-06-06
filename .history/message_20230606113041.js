const sendMessage = function () {
  const message = composeMessageText.value;
  const subject = composeMessageSubject.value;
  const reciever = composeMessageReciever.value;
  const target = students.find((stu) => stu.fullName === `${reciever}`);
  const date = new Date(Date.now()).toLocaleString();
  console.log(date);
  console.log(message, subject, reciever, target);
  if (target === undefined) {
    alert("Not a valid message reciercer");
  } else {
    target.inbox.push(message);
    target.from.push(currentAccount.fullName);
    target.subject.push(subject);
    target.date.push(date);
    // currentAccount.sent.push(message);
    // currentAccount.date.push(date);
    composeMessageReciever.value = "";
    composeMessageText.value = "";
    composeMessageSubject.value = "";
    localStorage.setItem("students", JSON.stringify(students));
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

const updateInboxLoad = function (target) {
  getStudentsLocalStorage();
  console.log(target);
  for (let i = 0; i < target.inbox.length; i++) {
    console.log(target.inbox[i]);
    const html = `<div id="inbox-line">
  <p>${currentAccount.date}</p>
  <p>${currentAccount.from}</p>
  <p>${currentAccount.fullName}</p>
  <p>${currentAccount.subject}</p>
  <p>${currentAccount.inbox[i]}</p>
</div> 
  `;
    inboxLine.insertAdjacentHTML("beforebegin", html);
  }
};
// updateInboxLoad();
