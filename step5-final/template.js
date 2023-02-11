{
  const opener = document.getElementById('mainMenuOpen');
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      opener.blur();
      let target = location.hash.substr(1);
      if (target && document.getElementById(target).classList.contains('modal'))
        location.hash = '';
    }
  });
  // he two touch events helps fix iOS garbage way of handling
  // touch vs. click events and focus.
  opener.addEventListener('touchstart', () => {
    opener.focus();
  });
  opener.nextElementSibling.addEventListener('touchstart', () => {
    opener.blur();
  });
}
