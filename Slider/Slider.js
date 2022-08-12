// #1 Простой слайдер
// Это простейший слайдер элементов. При клике на правую стрелочку, элементы должны сдвигаться вправо. При клике на левую стрелочку, элементы должны сдвигаться влево.

const items = document.querySelector('#items'),
    prevArrow = document.querySelector('#prev'),
    nextArrow = document.querySelector('#next'),
    computedStyles = getComputedStyle(items);


prevArrow.addEventListener('click',
    e => {
        e.preventDefault();
        let currentNext = parseInt(computedStyles.right);
        if (currentNext > 0) {
            items.style.right = `${currentNext - 100}px`;
        }
    });

nextArrow.addEventListener('click',
    e => {
        e.preventDefault();
        let currentNext = parseInt(computedStyles.right);
        if (currentNext < 500) {
            items.style.right = `${currentNext + 100}px`;
        }
    });