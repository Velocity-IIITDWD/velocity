export function include(file, elementId) {
  fetch(file)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(elementId).innerHTML = html
    })
}
