document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#btn');
    const input = document.querySelector('#text');
    const square = document.querySelector('#square');
    const square2 = document.querySelector('#square2');
    const e_button = document.querySelector('#e_btn');
    const range = document.querySelector('#range');
    const circle = document.querySelector('#circle');
    const circle2 = document.querySelector('#circle2');
    const circle3 = document.querySelector('.circle3');
    const rangeSpan = document.querySelector('#range-span');


    button.addEventListener('click', () => {
        square.style.backgroundColor = input.value;
    })
    e_button.addEventListener('click', (e) => {
        e.target.style.display = 'none';
    })
    range.addEventListener('input', (e) => {
        let val = e.target.value;
        rangeSpan.textContent = val;
        circle.style.width = val + '%';
        circle.style.height = val + '%';

    });


    square2.addEventListener('mouseover', (e) => {
        e.target.classList.add('border');
    });
    square2.addEventListener('mouseout', (e) => {
        e.target.classList.remove('border');
    });


});