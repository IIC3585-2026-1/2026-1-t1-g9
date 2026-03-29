const cssCode = document.getElementById('css-code');
const transformCards = document.querySelectorAll('.transform-card');

const cssSnippets = {
    translate: `.shape-translate.is-active {
    transform: translate(36px, -18px);
}`,
    rotate: `.shape-rotate.is-active {
    transform: rotate(45deg);
}`,
    scale: `.shape-scale.is-active {
    transform: scale(1.3);
}`,
    skew: `.shape-skew.is-active {
    transform: skew(-18deg, 0deg);
}`
};

function setCssSnippet() {
    cssCode.value = Object.entries(cssSnippets)
        .map(([name, snippet]) => {
            const currentCard = document.querySelector(`[data-transform="${name}"]`);
            const currentShape = currentCard.querySelector('.shape');
            const stateLabel = currentShape.classList.contains('is-active') ? 'Activa' : 'Inactiva';

            return `${snippet}  /* ${stateLabel} */`;
        })
        .join('\n\n');
}

transformCards.forEach((card) => {
    card.addEventListener('click', () => {
        const shape = card.querySelector('.shape');

        shape.classList.toggle('is-active');
        card.setAttribute('aria-pressed', shape.classList.contains('is-active'));
        setCssSnippet();
    });
});

setCssSnippet();
