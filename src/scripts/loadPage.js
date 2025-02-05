const pages = {
  'home':  'assets/pages/home.html',
  'about': 'assets/pages/about.html'
}

let currPage = 'home';

function loadPage(page) {
  fetch(pages[page])
    .then(response => response.text())
    .then(text => {
      document.getElementById('main').innerHTML = text;

      const element = document.getElementById(page + '-btn');
      if (element) {
        element.style.backgroundColor = 'var(--accent-color)';
        element.style.color = 'var(--primary-color)';
      }
    })
    .catch(error => {
      console.error('Error loading page:', error);
    });
}
