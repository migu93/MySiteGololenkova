import('js/heart.js')

document.querySelector('.like-button').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked');
});