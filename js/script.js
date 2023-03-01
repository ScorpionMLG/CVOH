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
        break;
        case 'switcher-light':
          switcher.classList.remove('switcher-light');
          switcher.classList.add('switcher-dark');
          document.body.classList.remove('theme-light');
          document.body.classList.add('theme-dark');
        break;
    }
  })

  // кнопка темы в адаптиве
  const btnAdaptive = document.getElementById('adaptive-btn');
  const themeListAdaptive = document.getElementById('adaptive-settings');
  const themeBtnAdaptive = document.getElementById('theme-btn-adaptive');
  const themeSwitcherAdaptive = document.getElementById('switcher-adaptive')
  btnAdaptive.addEventListener('click', () => {
    themeBtnAdaptive.addEventListener('click', () => {
      switch (themeSwitcherAdaptive.classList[1]) {
        case 'switcher-auto':
          themeSwitcherAdaptive.classList.remove('switcher-auto');
          themeSwitcherAdaptive.classList.add('switcher-dark');
          document.body.classList.remove('theme-auto');
          document.body.classList.add('theme-dark');
          break;
        case 'switcher-dark':
          themeSwitcherAdaptive.classList.remove('switcher-dark');
          themeSwitcherAdaptive.classList.add('switcher-light');
          document.body.classList.remove('theme-dark');
          document.body.classList.add('theme-light');
          break
          case 'switcher-light':
            themeSwitcherAdaptive.classList.remove('switcher-light');
            themeSwitcherAdaptive.classList.add('switcher-dark');
            document.body.classList.remove('theme-light');
            document.body.classList.add('theme-dark')
          break
      }
    })
    themeListAdaptive.classList.toggle('adaptive-settings-hidden')
  })
  // можно проверить какой цвет определяется по дефолту в кссе в @media (prefers-color-scheme: ... ,
  // и из этого сделать вывод, какая цвет. схема в винде и после этого навесить класс в зависимости от цвета

})()
