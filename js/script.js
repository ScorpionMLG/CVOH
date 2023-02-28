(() => {

// выплывает блок с настройками по нажатию кнопки
  const setup = document.getElementById('setup');
  const setupList = document.getElementById('setup-list');
  setup.addEventListener('click', () => {
    document.body.addEventListener('click', function (e) {
      if (!e.target.closest('.setup')) {
        setupList.classList.add('setup-list-hidden');
      }
    })
    setupList.classList.toggle('setup-list-hidden');
  })

// внутри блока переключение темы
  const themeBtn = document.getElementById('theme-btn');
  const switcher = document.getElementById('switcher');
  themeBtn.addEventListener('click', () => {
    switch (switcher.classList[1]) {
      case 'switcher-auto':
        switcher.classList.remove('switcher-auto');
        switcher.classList.add('switcher-dark');
        document.body.classList.remove('theme-auto');
        document.body.classList.add('theme-dark');
        break;
      case 'switcher-dark':
        switcher.classList.remove('switcher-dark');
        switcher.classList.add('switcher-light');
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-light');
        break
        case 'switcher-light':
          switcher.classList.remove('switcher-light');
          switcher.classList.add('switcher-auto');
          document.body.classList.remove('theme-light');
          document.body.classList.add('theme-auto')
        break
    }
  })

})()
