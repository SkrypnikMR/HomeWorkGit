export const support = {
  lsSet: (name, item) => localStorage.setItem(name, item),
  lsGet: (name) => localStorage.getItem(name),
  redirect: (path) => window.location.pathname = path,
  setCookie: (name, data, hours) => document.cookie = `${name}=${data}; max-age=${hours * 3600}`,
  killCookie: (name) => document.cookie = `${name}=;max-age=0`,
  getCookie: (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  },
  createDBObject: (values) => {
    const { dbSelect, sortSelect, findFirstName, findLastName } = values;
    return {
      db: dbSelect.value,
      sort: sortSelect.value,
      findFirstName: findFirstName.value,
      findLastName: findLastName.value,
    };
  },
  showPass: (element, input) => {
    element.addEventListener('click', () => {
      if (input.getAttribute('type') === 'password') return input.setAttribute('type', 'text');
      else if (input.getAttribute('type') === 'text') return input.setAttribute('type', 'password');
    });
  },
  change: (bg, text, plhld, logo) => {
    const color = support.lsGet('color');
    for (const key in bg) {
      if (document.getElementById(key)) document.getElementById(key).style.background = bg[key][color];
    }
    for (const key in text) {
      if (document.getElementById(key)) {
        document.getElementById(key).style.color = text[key][color];
      }
    }
    for (const key in plhld) { }
    for (const key in logo) {
      if (document.getElementById(key)) document.getElementById(key).src = logo[key][color];
    }
  },
  translate: (text, ipt, titl) => {
    const lang = support.lsGet('lang');
    for (const key in text) {
      if (document.getElementById(key)) document.getElementById(key).textContent = text[key][lang];
    }
    for (const key in ipt) {
      if (document.getElementById(key)) document.getElementById(key).setAttribute('placeholder', ipt[key][lang]);
    }
    for (const key in titl) {
      if (document.getElementById(key)) document.getElementById(key).setAttribute('title', titl[key][lang]);
    }
  },
  translateMain: (text, ipt, titl) => {
    const langSelect = document.querySelector('#lang');

    if (!support.lsGet('lang')) support.lsSet('lang', 'en');

    support.translate(text, ipt, titl);

    langSelect.value = support.lsGet('lang');
    langSelect.addEventListener('change', (e) => {
      support.lsSet('lang', e.target.value);
      support.translate(text, ipt, titl);
    });
  },
  changeColor: (bg, text, plhld, logo) => {
    if (!support.lsGet('color')) support.lsSet('color', '&#9728;');
    support.change(bg, text, plhld, logo);
    const chengeBtn = document.querySelector('.header__theme');
    chengeBtn.addEventListener('click', () => {
      if (chengeBtn.classList.contains('moon')) {
        chengeBtn.classList.remove('moon');
        chengeBtn.classList.add('sun');
        chengeBtn.innerHTML = '&#9728;';
        support.lsSet('color', '&#9728;');
        support.change(bg, text, plhld, logo);
      }
      else if (chengeBtn.classList.contains('sun')) {
        chengeBtn.classList.remove('sun');
        chengeBtn.classList.add('moon');
        chengeBtn.innerHTML = '&#127769;';
        support.lsSet('color', '&#127769;');
        support.change(bg, text, plhld, logo);
      }
    });
  },
  inputSettingsOperator: (e) => {
    const changeLoginInput = document.querySelector('#loginText');
    const changePasswordInput = document.querySelector('#passwordText');
    const changePasswordConfirmInput = document.querySelector('#passwordRepeatText');
    if (e.target.id === 'loginCheckBox' && e.target.checked === true) changeLoginInput.disabled = false;
    if (e.target.id === 'loginCheckBox' && e.target.checked === false) changeLoginInput.disabled = true;
    if (e.target.id === 'passwordCheckBox' && e.target.checked === true) {
      changePasswordInput.disabled = false;
      changePasswordConfirmInput.disabled = false;
    }
    if (e.target.id === 'passwordCheckBox' && e.target.checked === false) {
      changePasswordInput.disabled = true;
      changePasswordConfirmInput.disabled = true;
    }
  },
  settingsModeSetup: (changeLoginInput, changePasswordInput) => {
    if (changeLoginInput.disabled && changePasswordInput.disabled) return 'noDataMode';
    if (!changeLoginInput.disabled && changePasswordInput.disabled) return 'onlyLoginMode';
    if (changeLoginInput.disabled && !changePasswordInput.disabled) return 'onlyPasswordMode';
    if (!changeLoginInput.disabled && !changePasswordInput.disabled) return 'loginAndPasswordMode';
  }
};

