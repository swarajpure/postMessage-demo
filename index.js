const redirectionBtn = document.querySelector('#redirection-btn');
const paymentStatus = document.querySelector('#payment-status');

redirectionBtn.addEventListener('click', () => {
  window.open('./newTab.html');
});

window.addEventListener('message', (e) => {
  const { isPaymentCompleted } = e.data;
  if (isPaymentCompleted) {
    console.info('User has completed payment from the other tab!');
    paymentStatus.textContent = 'true';
  }
});
