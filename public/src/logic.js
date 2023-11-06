import initializeTheme from './darkmode';
import setInitialState from './resize';

document.addEventListener('DOMContentLoaded', function () {
    initializeTheme();
    setInitialState();
});
