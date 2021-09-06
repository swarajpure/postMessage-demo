const sendMessageBtn = document.querySelector('#send-message-btn');

const payload = { hasUserClicked: true };

sendMessageBtn.addEventListener('click', (e) => {
  window.opener.postMessage(payload);
});
