const animationButton = document.getElementById('animation-button');

animationButton.addEventListener('click', () => {
    animationButton.classList.remove('is-animating');
    void animationButton.offsetWidth;
    animationButton.classList.add('is-animating');
});

animationButton.addEventListener('animationend', () => {
    animationButton.classList.remove('is-animating');
});
