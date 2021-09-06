const redirectionBtn = document.querySelector('#redirection-btn');

redirectionBtn.addEventListener('click', () => {
  window.open('./newTab.html');
});

window.addEventListener('message', (e) => {
  const { hasUserClicked } = e.data;
  if (hasUserClicked) {
    console.info('User has clicked the button on the other tab!');
  }
});
