(function () {
    var canvas = document.querySelectorAll('canvas'), i

    function init() {
        for (i = 0; i < canvas.length; ++i) {
            var ctx = canvas[i].getContext('2d')

            setup(4, ctx, canvas[i].parentElement.clientWidth, canvas[i].parentElement.clientHeight)
        }
    }

    'resize click touchleave'.split(' ').forEach(function (e) { window.addEventListener(e, init, false) })

    init()
})()
