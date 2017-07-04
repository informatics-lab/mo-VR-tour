/* global AFRAME */

/**
 * Component that listens to an event, toggles visibility of the target
 * and plays a video from the beginning.
 */

AFRAME.registerComponent('toggle-video-visibility', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'}, // a-video or a-entity where video is played
    vid: {type: 'selector'} // Video asset
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.on, function () {
      if (data.target.getAttribute('visible') === true) {
        // If the video entity is currently visible
        // Make invisble and mute
        data.target.setAttribute('visible','false');
        data.vid.muted = true;
      } else {
        // If video entity is currently invisble, make visible
        data.target.setAttribute('visible','true');
        // Now reset video, turn sound on and play it from start
        data.vid.muted = false;
        data.vid.currentTime = 0;
        data.vid.play();
      }
    });
  },
});
