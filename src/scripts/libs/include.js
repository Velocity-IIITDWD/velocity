export function include(file, elementId, jsFile) {
  fetch(file)
    .then((response) => response.text())
    .then((html) => {
      if (jsFile === undefined) {
        document.getElementById(elementId).innerHTML = html;
        return;
      }
      fetch(jsFile)
        .then((response) => response.text())
        .then((js) => { 
          document.getElementById(elementId).innerHTML = html;
          const script = document.createElement('script');
          script.innerHTML = js;
          document.getElementById(elementId).appendChild(script);
        })
    })
}
