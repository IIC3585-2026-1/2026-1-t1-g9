function switchDirection() {
    const container = document.querySelector('.flexbox-demo');
    const text = document.getElementById('code');

    const current = getComputedStyle(container).flexDirection;

    if (current === 'row') {
        container.style.flexDirection = 'column';
        text.value = text.value.replace(
            /flex-direction:\s*\w+;/,
            'flex-direction: column;'
        );
    } else {
        container.style.flexDirection = 'row';
        text.value = text.value.replace(
            /flex-direction:\s*\w+;/,
            'flex-direction: row;'
        );
    }
}