(function () {
    const main = document.querySelector('main');
    const heightContainer = main.querySelector('#height');
    const widthContainer = main.querySelector('#width');
    const indicator = document.querySelector('#indicator');
    const zoomIndicatorBar = document.querySelector('.zoom-indicator-bar');
    const zoomPercentage = zoomIndicatorBar.querySelector('.zoom-percentage span:nth-child(2)');
    const zoomLevels = Object.freeze([500, 400, 300, 250, 200, 175, 150, 125, 110, 100, 90, 80, 75, 67, 50, 33, 25]);

    let isViewport = true;

    function setSizes() {
        if (isViewport) {
            heightContainer.textContent = window.innerHeight;
            widthContainer.textContent = window.innerWidth;
        }
    }

    function handleKeyboardEvent(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            return toggleSize();
        }
    }

    function getClosestZoomLevel(zoom) {
        return zoomLevels.reduce((prev, curr) => (Math.abs(curr - zoom) < Math.abs(prev - zoom) ? curr : prev));
    }

    function updateZoomIndicator() {
        const zoom = (window.outerWidth / window.innerWidth) * 100;
        const closestZoomLevel = getClosestZoomLevel(zoom);
        const zoomToShow = Math.min(closestZoomLevel, 500);

        if (zoomToShow < 100) {
            zoomIndicatorBar.style.width = `${zoomToShow}%`;
        } else {
            zoomIndicatorBar.style.width = '100%';
        }

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

    function setInitialState() {
        setSizes();
        return updateZoomIndicator();
    }

    setInitialState();
    window.addEventListener('resize', setInitialState);
    main.addEventListener('click', toggleSize);
    document.addEventListener('keydown', handleKeyboardEvent);
    document.addEventListener('DOMContentLoaded', main.focus);
})();
