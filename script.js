let currentTheme = 0;
const themes = ['theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6', 'dark-light'];
const wishes = [
    "This Diwali, may your home be filled with good vibes, laughter, and beautiful memories with loved ones.",
    "Wishing you a Diwali full of sweet moments and colorful memories with your loved ones.",
    "May the festival of lights illuminate your life with joy, peace, and happiness.",
    "Sending you warm wishes and love on this auspicious occasion of Diwali.",
    "May your life be as colorful and sparkling as the lights of Diwali.",
    "Wishing you prosperity and good fortune on this joyful festival.",
    "May this Diwali bring you closer to your loved ones and fill your heart with joy."
];

let userName = prompt("Please enter your name:");

while (!userName) {
    alert("Name is required to continue.");
    userName = prompt("Please enter your name:");
}

document.getElementById('userName').textContent = userName;

function toggleTheme() {
    document.body.classList.remove(themes[currentTheme]);
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.classList.add(themes[currentTheme]);
    updateWish();
}

function updateWish() {
    const wishIndex = currentTheme === 6 ? 0 : currentTheme;
    document.querySelector('.message').textContent = wishes[wishIndex];
}

updateWish();
