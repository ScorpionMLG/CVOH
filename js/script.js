(() => {
  const setup = document.getElementById('setup');
  const setupList = document.getElementById('setup-list');
  setup.addEventListener('click', () => {
    setupList.classList.toggle('setup-list-hidden');
  })
  const themeBtn = document.getElementById('theme-btn');
  themeBtn.addEventListener('click', () =>{
    console.log('dorabotat');
  })
})()
