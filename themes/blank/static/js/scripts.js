let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('magazine');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    console.log(theme);
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == 'magazine') {
    document.getElementById('switcher-id').href = './css/magazine.css';
  } else if (theme == 'intermission') {
    document.getElementById('switcher-id').href = './css/intermission.css';
  } else if (theme == 'scarletbeg') {
    document.getElementById('switcher-id').href = './css/scarletbeg.css';
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = './css/dark.css';
  }
  localStorage.setItem('style', theme);
}
