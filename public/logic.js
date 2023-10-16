// Selecting elements from the DOM
const main = document.querySelector('main');
const heightContainer = main.querySelector('#height');
const widthContainer = main.querySelector('#width');
const indicator = document.querySelector('#indicator');
const zoomIndicatorBar = document.querySelector('.zoom-indicator-bar');
const zoomPercentage = document.querySelector('.zoom-percentage');

let isViewport = true;

function setSizes() {
    if (isViewport) {
        heightContainer.textContent = window.innerHeight;
        widthContainer.textContent = window.innerWidth;
    }
}

// Lookup-Table for zoom levels
const zoomLevels = [];
for (let i = 0; i <= 100; i++) {
    zoomLevels.push(i);
}

// Function to find the closest zoom level from the lookup table
function getClosestZoomLevel(zoom) {
    return zoomLevels.reduce((prev, curr) =>
        Math.abs(curr - zoom) < Math.abs(prev - zoom) ? curr : prev
    );
}

function updateZoomIndicator() {
    // Calculate the zoom level based on the window dimensions
    const zoom = (window.outerWidth / window.innerWidth) * 100;
    const closestZoomLevel = getClosestZoomLevel(zoom);

    // Ensure the zoom level does not exceed 100%
    const zoomToShow = Math.min(closestZoomLevel, 100);
    zoomIndicatorBar.style.width = `${zoomToShow}%`;
    zoomPercentage.textContent = `${zoomToShow}%`;
}

function toggleSize() {
    const width = isViewport ? screen.width : window.innerWidth;
    const height = isViewport ? screen.height : window.innerHeight;

    widthContainer.textContent = width;
    heightContainer.textContent = height;

    indicator.textContent = isViewport ? 'resolution' : 'viewport';

    isViewport = !isViewport; 
}

setSizes();
updateZoomIndicator();

window.addEventListener('resize', () => {
    setSizes();
    updateZoomIndicator(); 
});

main.addEventListener('click', toggleSize);
