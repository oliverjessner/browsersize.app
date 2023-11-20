const body = document.body;
const themeButton = document.querySelector('.theme-button');

function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
}

function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    return setTheme(newTheme);
}

function matchColorScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || matchColorScheme();
    return setTheme(savedTheme);
}

themeButton.addEventListener('click', toggleTheme);
