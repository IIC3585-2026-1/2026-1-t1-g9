const root = document.documentElement;

const inputs = {
    minLimit: document.getElementById('min-limit'),
    maxLimit: document.getElementById('max-limit'),
    clampIdeal: document.getElementById('clamp-ideal')
};

const formulas = {
    calc: document.getElementById('calc-formula'),
    min: document.getElementById('min-formula'),
    max: document.getElementById('max-formula'),
    clamp: document.getElementById('clamp-formula')
};

function average(a, b) {
    return (a + b) / 2;
}

function updateDemo() {
    const minLimit = Number(inputs.minLimit.value);
    const maxLimit = Number(inputs.maxLimit.value);
    const clampIdeal = Number(inputs.clampIdeal.value);
    const calcResult = average(minLimit, maxLimit);
    const minResult = Math.min(minLimit, 75);
    const maxResult = Math.max(maxLimit, 25);
    const clampResult = Math.min(Math.max(clampIdeal, 25), 75);

    root.style.setProperty('--min-limit', `${minLimit}%`);
    root.style.setProperty('--max-limit', `${maxLimit}%`);
    root.style.setProperty('--clamp-ideal', `${clampIdeal}%`);

    formulas.calc.textContent = `calc((${minLimit}% + ${maxLimit}%) / 2) = ${calcResult}%`;
    formulas.min.textContent = `min(${minLimit}%, 75%) = ${minResult}%`;
    formulas.max.textContent = `max(${maxLimit}%, 25%) = ${maxResult}%`;
    formulas.clamp.textContent = `clamp(25%, ${clampIdeal}%, 75%) = ${clampResult}%`;
}

Object.values(inputs).forEach((input) => {
    input.addEventListener('input', updateDemo);
});

updateDemo();
