var mappings = {
  mappings: {
    default: {
      common: {
        triggerdown: 'teleportstart',
        triggerup: 'teleportend'
      },
      'oculus-touch-controls': {
        thumbstickdown: 'teleportstart',
        thumbstickup: 'teleportend'
      },
      keyboard: {
        't_down': 'teleportstart',
        't_up': 'teleportend'
      }
    }
  }
};

AFRAME.registerInputMappings(mappings);



AFRAME.registerComponent('spawn', {

  schema: {
    default: '',
    parse: AFRAME.utils.styleParser.parse
  },

  init: function () {
    const data = this.data;
    const el = this.el;
    let hand = document.querySelector('#lefthand');
    
    el.addEventListener(data.event, evt => {
      // Create element.
      console.log(this.el.object3D.position);
      for(let i = 0; i < 10; i++){
        var a = new THREE.Vector3( i, i, i );
      let spawnEl = document.createElement('a-entity');
      spawnEl.setAttribute('position', evt.detail.intersection.point);
      // spawnEl.setAttribute('position', this.el.getAttribute('position'));
      // Set components and properties.
      Object.keys(data).forEach(name => {
        if (name === 'event') { return; }
        AFRAME.utils.entity.setComponentProperty(spawnEl, name, data[name]);
      });
      // Append to scene.
      el.sceneEl.appendChild(spawnEl);
      }

    });
  },
  tick: function(){ 
    
    
  }

});

AFRAME.registerComponent('rotation-reader', {

  tick: function () {
    // `this.el` is the element.
    // `object3D` is the three.js object.

    // `rotation` is a three.js Euler using radians. `quaternion` also available.
    // console.log(this.el.object3D.rotation);

    // `position` is a three.js Vector3.
    // console.log(this.el.object3D.position);
  }
});


AFRAME.registerComponent('random-color', {
  dependencies: ['material'],

  init: function () {
    this.el.setAttribute('material', 'color', getRandomColor());
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

AFRAME.registerComponent('logthree', {
  init: function () {
    console.log(THREE);
  }
});

