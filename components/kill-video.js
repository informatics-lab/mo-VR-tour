/* global AFRAME */

/**
 * Component that listens for event, pauses a video, restarts it and hides it.
 * Component should be used in the entity that emits the event.
 */

AFRAME.registerComponent('kill-video', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'}, // a-video or a-entity where video is played
    vid: {type: 'selector'}, // Video asset
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.on, function () {
      data.vid.pause(); // pause
      data.vid.currentTime = 0; // restart
      data.target.setAttribute('visible', 'false'); // hide
    });
  },
});
