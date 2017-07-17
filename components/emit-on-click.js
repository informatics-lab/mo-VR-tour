/* global AFRAME */

/**
 * Component that listens for click and emits a specified event.
 */

AFRAME.registerComponent('emit-on-click', {
  schema: {
    emit: {type: 'string'},
    target: {type: 'selector'},
  },

  init: function () {
    var data = this.data;

    this.el.addEventListener('click', function () {
      data.target.emit(data.emit);
    });
  },
});
