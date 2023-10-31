(function () {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    const themeButton = document.querySelector('.theme-button');

    function setTheme(theme) {
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeIcon.textContent = theme === 'dark' ? '🌞' : '🌗';
    }

    function toggleTheme() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        return setTheme(newTheme);
    }

    function initializeTheme() {
        const savedTheme =
            localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        return setTheme(savedTheme);
    }

    themeButton.addEventListener('click', toggleTheme);
    document.addEventListener('DOMContentLoaded', initializeTheme);
})();
