// Kopiér-knap på kodeblokke
document.querySelectorAll('div.highlighter-rouge').forEach(function (block) {
  var code = block.querySelector('code');
  var btn = document.createElement('button');
  btn.className = 'copy';
  btn.type = 'button';
  btn.textContent = 'kopiér';
  btn.addEventListener('click', function () {
    navigator.clipboard.writeText(code.innerText.replace(/\n$/, '')).then(function () {
      btn.textContent = 'kopieret';
      setTimeout(function () { btn.textContent = 'kopiér'; }, 1500);
    });
  });
  block.appendChild(btn);
});
