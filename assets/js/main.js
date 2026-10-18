// Small enhancements only. Every page works without this file.
(function () {
  // Project filter (projects page)
  var buttons = document.querySelectorAll('[data-filter]');
  var cards = document.querySelectorAll('[data-area]');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var area = btn.getAttribute('data-filter');
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      cards.forEach(function (card) {
        card.hidden = !(area === 'all' || card.getAttribute('data-area') === area);
      });
    });
  });

  // Map: highlight a pin and its list entry together (home page)
  var links = document.querySelectorAll('[data-pin]');
  links.forEach(function (el) {
    var id = el.getAttribute('data-pin');
    function set(on) {
      document.querySelectorAll('[data-pin="' + id + '"]').forEach(function (x) { x.classList.toggle('is-on', on); });
    }
    el.addEventListener('mouseenter', function () { set(true); });
    el.addEventListener('mouseleave', function () { set(false); });
    el.addEventListener('focus', function () { set(true); });
    el.addEventListener('blur', function () { set(false); });
  });
})();
