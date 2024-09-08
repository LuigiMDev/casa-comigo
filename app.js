const button = document.getElementById('button__not');

button.addEventListener('click', () => {
    const widthWindow = window.innerWidth;
    const heightWindow = window.innerHeight;

    const newPositionX = Math.random() * (widthWindow - button.offsetWidth) + 10;
    const newPositionY = Math.random() * (heightWindow - button.offsetHeight) + 10;

    button.style.position = 'absolute';
    button.style.left = newPositionX + 'px';
    button.style.top = newPositionY + 'px';
})

button.addEventListener('mouseover', () => {
    const widthWindow = window.innerWidth;
    const heightWindow = window.innerHeight;

    const newPositionX = Math.random() * (widthWindow - button.offsetWidth) + 10;
    const newPositionY = Math.random() * (heightWindow - button.offsetHeight) + 10;

    button.style.position = 'absolute';
    button.style.left = newPositionX + 'px';
    button.style.top = newPositionY + 'px';
})