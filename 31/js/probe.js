AFRAME.registerComponent('probe', {
    schema: {
        amount: {
            type: 'number',
            default: 10
        },
        color: {
            type: 'color',
            default: 'red'
        },
        duration: {
            type: 'number',
            default: 10000
        },
        randScaleMax: {
            type: 'number',
            default: 3
        },
    },
    //custom function
    getRandomInt: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },

    getRandomColor: function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },


    init: function () {

        for (let i = 1; i < this.data.amount; i++) {
            let s = this.getRandomInt(1, this.data.randScaleMax);
            let box = document.createElement('a-obj-model');
            box.setAttribute('src', 'assets/models/probe.obj');
            box.setAttribute('color', this.getRandomColor());
            box.setAttribute('position', this.getRandomInt(-20, 20) + ' ' + this.getRandomInt(-
                -20, 20) + ' ' + this.getRandomInt(-20, 20));
            box.setAttribute('scale', s + ' ' + s + ' ' + s);
            // box.setAttribute('scale', '20 20 20');
            box.setAttribute('rotation', '0 0 ' + this.getRandomInt(-180, 180));
            box.setAttribute('radius', i);
            box.setAttribute('metalness', 1);
            box.setAttribute('emissiveIntensity', 1);
            box.setAttribute('flatShading', 0);
            // box.setAttribute('transparent', 'true');
            // box.setAttribute('opacity', this.getRandomInt(1, 9) * .1);

            box.setAttribute('animation', {
                property: 'position',
                dir: 'alternate',
                dur: this.getRandomInt(5000, 30000),
                delay: 2000,
                to: this.getRandomInt(-100, 100) + ' ' + this.getRandomInt(-100, 100) + ' ' +
                    this.getRandomInt(-100, 100),
                easing: 'easeInSine',
                loop: true
            });

            box.setAttribute('animation__rot', {
                property: 'rotation',
                dir: 'alternate',
                dur: this.getRandomInt(10000, 40000),
                to: this.getRandomInt(0, 360) + ' ' + this.getRandomInt(0, 360) + ' ' +
                    this.getRandomInt(0, 360),
                easing: 'easeInSine',
                loop: true
            });

            this.el.appendChild(box);

        }
    }
});