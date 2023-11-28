const gameButton = document.getElementById('gameButton');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

gameButton.addEventListener('click', () => {
    const randomColor = getRandomColor();
    gameButton.style.backgroundColor = randomColor;
});