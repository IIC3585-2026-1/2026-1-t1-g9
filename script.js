function switchDirection() {
    const container = document.querySelector('.flexbox-demo');
    if (container.style.flexDirection === 'row') {
        container.style.flexDirection = 'column';
    } else {
        container.style.flexDirection = 'row';
    }
}