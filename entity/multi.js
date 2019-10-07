        // register your component here with a name
        AFRAME.registerComponent('hello-world', {
          schema: {
              message: {
                  type: 'string',
                  default: 'Hello, World!'
              },
              amount: {
                  type: 'number',
                  default: 1
              },
              color: {
                  type: 'color',
                  default: 'red'
              },
          },
          init: function () {
              for (var i = 0; i < this.data.amount; i++) {
                  var box = document.createElement('a-text');
                  box.setAttribute('color', this.data.color);
                  box.setAttribute('position', '0 ' + i * 0.25 + ' -2');
                  box.setAttribute('scale', '1 1 1');
                  box.setAttribute('value', this.data.message);
                  this.el.appendChild(box);
              }
          }
      });