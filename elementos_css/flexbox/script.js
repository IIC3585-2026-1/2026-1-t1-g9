function switchDirection() {
    const container = document.querySelector('.flexbox-demo');
    const text = document.getElementById('directionText');

    const current = getComputedStyle(container).flexDirection;

    if (current === 'row') {
        container.style.flexDirection = 'column';
        text.textContent = 'flex-direction: column;';
    } else {
        container.style.flexDirection = 'row';
        text.textContent = 'flex-direction: row;';
    }
}