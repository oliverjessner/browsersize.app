const heightContainer = document.querySelector('#height');
const widthContainer = document.querySelector('#width');
const main = document.querySelector('main');

let isViewport = true;

function setSizes() {
    requestAnimationFrame(function () {
        heightContainer.textContent = window.innerHeight;
        widthContainer.textContent = window.innerWidth;
    });
}

function toggleSize() {
    requestAnimationFrame(function () {
        const width = isViewport ? screen.width : window.innerWidth;
        const height = isViewport ? screen.height : window.innerHeight;

        widthContainer.textContent = width;
        heightContainer.textContent = height;

        indicator.textContent = isViewport ? "resolution" : "viewport";

        isViewport = !isViewport;
    });
}

setSizes();
window.addEventListener('resize', setSizes);
main.addEventListener('click', toggleSize);

