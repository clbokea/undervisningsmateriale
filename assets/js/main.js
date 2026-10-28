// Åbn/luk træet på mobil
document.querySelectorAll('.sidebar-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var target = document.getElementById(btn.getAttribute('aria-controls'));
    var open = target.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});
