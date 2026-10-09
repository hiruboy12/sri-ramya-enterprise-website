(() => {
  const languageToggle = document.getElementById('language-toggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  let language = 'en';
  function setLanguage(next) {
    language = next;
    document.documentElement.lang = language;
    document.body.classList.toggle('lang-si', language === 'si');
    document.querySelectorAll('[data-en][data-si]').forEach((el) => {
      const value = el.dataset[language];
      if (value !== undefined) el.innerHTML = value;
    });
    languageToggle.textContent = language === 'en' ? 'සිංහල' : 'English';
    languageToggle.setAttribute('aria-label', language === 'en' ? 'Switch to Sinhala' : 'Switch to English');
  }
  languageToggle.addEventListener('click', () => setLanguage(language === 'en' ? 'si' : 'en'));
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuToggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰';
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('enquiry-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Website enquiry — ${form.get('service')}`;
    const body = `Name: ${form.get('name')}\nPhone: ${form.get('phone')}\nService: ${form.get('service')}\n\nProject details:\n${form.get('message')}`;
    window.location.href = `mailto:sriramyakandana@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
