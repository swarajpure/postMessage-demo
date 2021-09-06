const sendMessageBtn = document.querySelector('#send-message-btn');

const payload = { isPaymentCompleted: true };

sendMessageBtn.addEventListener('click', (e) => {
  window.opener.postMessage(payload);
  window.close();
});
