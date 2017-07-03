/* global AFRAME */

/**
 * Component that hides the target when a video ends.
 */

AFRAME.registerComponent('hide-after-video', {
  schema: {
    video: {type: 'selector'},
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    data.video.addEventListener('ended', function () {
      el.setAttribute('visible','false')
    });
  },
});
