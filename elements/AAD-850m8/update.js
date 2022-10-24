function(instance, properties, context) {
    
    window.MathJax = {
  jax: ["input/TeX", "output/SVG"],
  extensions: ["tex2jax.js", "MathMenu.js", "MathZoom.js"],
  TeX: {
    extensions: ["AMSmath.js", "AMSsymbols.js", "autoload-all.js"]
  },
  updateSectionDelay: 0,
  tex2jax: {
    inlineMath: [
      ['$', '$'],
      ["\\(", "\\)"]
    ],
    processEscapes: true
  },
  AuthorInit: function() {
    MathJax.Hub.Register.StartupHook("End", function() {
      function update() {
          var math = document.getElementById('math');
          math.innerHTML = document.getElementById('input').value;
          MathJax.Hub.Queue(['Typeset', MathJax.Hub, math]);
      }
      update();
      var input = document.getElementById('input');
      input.addEventListener('input', update);
    });
  }
};


}