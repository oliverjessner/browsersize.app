const body = document.body;
const themeButton = document.querySelector('.theme-button');

function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    return setTheme(newTheme);
}

function matchColorScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || matchColorScheme();
    return setTheme(savedTheme);
}

themeButton.addEventListener('click', toggleTheme);
document.addEventListener('DOMContentLoaded', initializeTheme);
