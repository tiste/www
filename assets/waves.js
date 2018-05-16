const hues = [0, 48, 160, 240];

const Wave = function (config) {
    this.position = config.position;
    this.x = config.x;
    this.y = config.y;
    this.width = config.width;
    this.height = config.height;
    this.color = config.color;
};

const Layer = function (config) {
    this.x = 0;
    this.waves = [];
    this.layers = config.layers;
    this.position = config.position;
    this.width = {
        total: config.width.total,
        min: config.width.min,
        max: config.width.max,
    };
    this.height = {
        total: config.height.total,
        min: config.height.min,
        max: config.height.max,
    };
    this.color = config.color;
    this.seed();
};

Layer.prototype.seed = function () {
    let newHeight, newWidth, totalWidth = 0;

    while (totalWidth <= this.width.total + (this.width.max * 4)) {
        newWidth = Math.floor(Math.random() * (this.width.max - this.width.min + 1) + this.width.min);
        newHeight = Math.floor(Math.random() * (this.height.max - this.height.min + 1) + this.height.min);

        this.waves.push(new Wave({
            position: this.position,
            x: this.waves.length === 0 ? 0 : this.waves[this.waves.length - 1].x + this.waves[this.waves.length - 1].width,
            y: this.height.total / 2 - newHeight,
            width: newWidth,
            height: newHeight,
            color: this.color,
        }));

        totalWidth += newWidth;
    }
};

Layer.prototype.render = function (ctx) {
    let c, d, i;

    ctx.save();
    ctx.translate(this.x, this.height.total / this.layers * this.position);
    ctx.beginPath();
    ctx.moveTo(this.waves[0].x, this.waves[0].y);

    for (i = 0; i < this.waves.length - 1; i++) {
        c = (this.waves[i].x + this.waves[i + 1].x) / 2;
        d = (this.waves[i].y + this.waves[i + 1].y) / 2;
        ctx.lineTo(c, d); // or ctx.quadraticCurveTo(this.waves[i].x, this.waves[i].y, c, d)
    }

    ctx.lineTo(this.width.total - this.x, this.height.total);
    ctx.lineTo(0 - this.x, this.height.total);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
};

const setup = function (layers, ctx, w, h) {
    let i = 0;
    const hue = hues[Math.floor(Math.random() * hues.length)];

    ctx.canvas.width = w;
    ctx.canvas.height = h;

    ctx.clearRect(0, 0, w, h);

    while (i < layers) {
        const l = new Layer({
            layers: layers,
            position: i + 1,
            width: {
                total: w,
                min: 120, // (i + 1) * 50
                max: 140, // (i + 1) * 70
            },
            height: {
                total: h,
                min: 100, // 200 - (i * 40)
                max: 300, // 300 - (i * 40)
            },
            color: 'hsl( ' + hue + ', ' + (i * 3 + 80) + '%, ' + (90 - (i * 10)) + '% )',
        });

        l.render(ctx);
        i++;
    }
};
