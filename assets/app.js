(function () {
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
        } else {
            document.body.classList.add('offline');
        }
    }
    networkMode();

    $('nav').midnight();
})();
