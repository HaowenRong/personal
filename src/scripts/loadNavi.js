
const naviPath = '/src/components/naviBar.html'

function loadNavi() {
  fetch(naviPath)
    .then(response => response.text())
    .then(html => {
      document.getElementById('navi').outerHTML = html;
    })
    .catch(error => {
      console.error('Error loading page:', error);
    });
}
