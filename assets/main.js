(function () {
    const c = document.getElementsByTagName('canvas')[0],
        ctx = c.getContext('2d');

    function init() {
        setup(10, ctx, window.innerWidth, window.innerHeight);
    }

    'resize click touchleave'.split(' ').forEach((e) => {
        window.addEventListener(e, init, false);
    });

    init();


    // offline mode
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then((serviceWorkerRegistration) => {
            console.log('Service Worker succesfully registered with scope: ', serviceWorkerRegistration.scope);
        }).catch((err) => {
            console.log('Service Worker registration failed: ', err);
        });
    }
})();
