(function () {
    var c = document.getElementsByTagName('canvas')[0],
        ctx = c.getContext('2d'),
        w = window.innerWidth,
        h = window.innerHeight,
        nb = 5,
        hues = [0, 120, 180, 240]

    var Wave = function (config) {
        this.position = config.position
        this.x = config.x
        this.y = config.y
        this.width = config.width
        this.height = config.height
        this.color = config.color
    }

    var Layer = function (config) {
        this.x = 0
        this.waves = []
        this.position = config.position
        this.width = {
            min: config.width.min,
            max: config.width.max,
        }
        this.height = {
            min: config.height.min,
            max: config.height.max,
        }
        this.color = config.color
        this.seed()
    }

    Layer.prototype.seed = function () {
        var newHeight, newWidth, totalWidth = 0

        while (totalWidth <= w + (this.width.max * 4)) {
            newWidth = Math.floor(Math.random() * (this.width.max - this.width.min + 1) + this.width.min)
            newHeight = Math.floor(Math.random() * (this.height.max - this.height.min + 1) + this.height.min)

            this.waves.push(new Wave({
                position: this.position,
                x: this.waves.length === 0 ? 0 : this.waves[this.waves.length - 1].x + this.waves[this.waves.length - 1].width,
                y: h / 2 - newHeight,
                width: newWidth,
                height: newHeight,
                color: this.color,
            }))

            totalWidth += newWidth
        }
    }

    Layer.prototype.render = function () {
        var c, d, i

        ctx.save()
        ctx.translate(this.x, h / 10 * this.position)
        ctx.beginPath()
        ctx.moveTo(this.waves[0].x, this.waves[0].y)

        for (i = 0; i < this.waves.length - 1; i++) {
            c = (this.waves[i].x + this.waves[i + 1].x) / 2
            d = (this.waves[i].y + this.waves[i + 1].y) / 2
            ctx.lineTo(c, d) // or ctx.quadraticCurveTo(this.waves[i].x, this.waves[i].y, c, d)
        }

        ctx.lineTo(w - this.x, h)
        ctx.lineTo(0 - this.x, h)
        ctx.closePath()
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
    }

    function setup() {
        var waves = 10
        var i = 0
        var hue = hues[Math.floor(Math.random() * hues.length)]
        w = window.innerWidth
        h = window.innerHeight

        ctx.canvas.width = w
        ctx.canvas.height = h

        ctx.clearRect(0, 0, w, h)

        while (i < waves) {
            var l = new Layer({
                position: i + 1,
                width: {
                    min: 120, // (i + 1) * 50
                    max: 140, // (i + 1) * 70
                },
                height: {
                    min: 100, // 200 - (i * 40)
                    max: 300, // 300 - (i * 40)
                },
                color: 'hsl( ' + hue + ', ' + (i * 3 + 80) + '%, ' + (90 - (i * 10)) + '% )',
            })

            l.render()
            i++
        }
    }

    'resize click touchleave'.split(' ').forEach(function (e) { window.addEventListener(e, setup, false) })

    setup()
})()
