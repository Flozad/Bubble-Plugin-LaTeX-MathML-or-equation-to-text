function(instance, context) {
    
    let mapped = `
            <div id="MathDiv">
        <span id="math"></span><br>
        <textarea id="input" cols="50" rows="20">This is a test: $$\Re{z} =\frac{n\pi \dfrac{\theta +\psi}{2}}{
            \left(\dfrac{\theta +\psi}{2}\right)^2 + \left( \dfrac{1}{2}
            \log \left\lvert\dfrac{B}{A}\right\rvert\right)^2}$$</textarea>
                </div>
          `
        instance.canvas.append(mapped);


(function(d, script) {
  script = d.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.onload = function() {
    // remote script has loaded
  };
  script.src = 'https://cdn.mathjax.org/mathjax/latest/MathJax.js';
  d.getElementsByTagName('head')[0].appendChild(script);
}(document));

}