const heightContainer = document.querySelector('#height');
const widthContainer = document.querySelector('#width');

function setSizes() {
    requestAnimationFrame(function () {
        heightContainer.textContent = window.innerHeight;
        widthContainer.textContent = window.innerWidth;
    });
}

setSizes();

window.addEventListener('resize', setSizes);
