const main = document.querySelector('main');
const heightContainer = main.querySelector('#height');
const widthContainer = main.querySelector('#width');
const indicator = document.querySelector('#indicator');

let isViewport = true;

function setSizes() {
    if (isViewport) {
        requestAnimationFrame(function () {
            heightContainer.textContent = window.innerHeight;
            widthContainer.textContent = window.innerWidth;
        });
    }
}

function toggleSize() {
    requestAnimationFrame(function () {
        const width = isViewport ? screen.width : window.innerWidth;
        const height = isViewport ? screen.height : window.innerHeight;

        widthContainer.textContent = width;
        heightContainer.textContent = height;

        indicator.textContent = isViewport ? 'resolution' : 'viewport';

        isViewport = !isViewport;
    });
}

setSizes();
window.addEventListener('resize', setSizes);
main.addEventListener('click', toggleSize);
