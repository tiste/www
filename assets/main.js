(function () {
    const c = document.getElementsByTagName('canvas')[0],
        ctx = c.getContext('2d');

    function initWaves() {
        setup(10, ctx, window.innerWidth, document.querySelector('.hero').offsetHeight);
    }

    'resize click touchleave'.split(' ').forEach((e) => {
        window.addEventListener(e, initWaves, false);
    });


    // offline mode
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then((serviceWorkerRegistration) => {
            console.log('Service Worker succesfully registered with scope: ', serviceWorkerRegistration.scope);
        }).catch((err) => {
            console.log('Service Worker registration failed: ', err);
        });
    }

    'online offline'.split(' ').forEach((e) => {
        window.addEventListener(e, networkMode, false);
    });

    function networkMode() {
        if (navigator.onLine) {
            document.body.classList.remove('offline');
        }
        else {
            document.body.classList.add('offline');
        }
    }


    initWaves();
    networkMode();
})();
