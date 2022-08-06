(function (d, s, i, w, o) {
  var js,
    cjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(i)) return;
  js = d.createElement('script');
  js.id = i;
  js.src = 'https://privacy.clymio.com/clym.js';
  js.onload = function () {
    Clym && Clym.load(i, w, o);
  };
  cjs.parentNode.insertBefore(js, cjs);
})(document, 'script', 'clym-privacy', 'b26669699c2d4d11bd4c47a6rekqksx7', {});
