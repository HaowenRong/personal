
const path = './public/assets/pages/'
const pages = {
  'home':     path + 'home.html',
  'projects': path + 'projects.html',
  'blog':     path + 'blog.html',
  'about':    path + 'about.html'
}

function loadPage(page) {
  console.log(pages[page])
  fetch(pages[page])
    .then(response => response.text())
    .then(text => {
      console.log(text)
      document.getElementById('main').innerHTML = text;

      const buttons = Array.from(document.getElementById('buttons').children);
      const button  = document.getElementById(page + '-btn');

      buttons.forEach(currButton => {
        currButton.style.backgroundColor = 'var(--primary-color)';
        currButton.style.color = 'var(--accent-color)';
      });

      if (button) {
        button.style.backgroundColor = 'var(--accent-color)';
        button.style.color = 'var(--primary-color)';
      }
    })
    .catch(error => {
      console.error('Error loading page:', error);
    });
}
