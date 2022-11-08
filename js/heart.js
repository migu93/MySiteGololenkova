import('js/heart.js')

document.querySelectorAll('.like-button').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('liked');
});