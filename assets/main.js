(function () {
    var c = document.getElementsByTagName('canvas')[0],
        ctx = c.getContext('2d')

    function init() {
        setup(10, ctx, window.innerWidth, window.innerHeight)
    }

    'resize click touchleave'.split(' ').forEach(function (e) { window.addEventListener(e, init, false) })

    init()
})()
