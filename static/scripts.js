let switch_mag = document.querySelector('#switch-1');
let switch_inter = document.querySelector('#switch-2');
let switch_scarlet = document.querySelector('#switch-3');

let page = document.querySelector('.page');
switch_inter.onclick = function() {
    page.classList.remove('magazine', 'scarletbeg');
    page.classList.add('intermission');
}
switch_mag.onclick = function() {
    page.classList.remove('intermission', 'scarletbeg');
    page.classList.add('magazine');
}
switch_scarlet.onclick = function() {
    page.classList.remove('intermission', 'magazine');
    page.classList.add('scarletbeg');
}