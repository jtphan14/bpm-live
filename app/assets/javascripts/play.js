function playSound(sound_file) {
  var audio = document.createElement("audio");
  audio.src = "/sounds/" + sound_file;
  audio.addEventListener("ended", function () {}, false);
  if (stop === false) {
    audio.play();
  }
  // // FIXME: Should be a better way to pause this
  // // works more like MUTE than STOP
  // else if (stop === true) {
  //   audio.pause();
  //   // audio.currentTime = 0;
  //   throw "";
  // }
}

function playKeypress(key_code, color, sound) {
  if (key_code < 49 || key_code > 58) { return; }
  var sound_file = soundFiles[sound][key_code - 49];
  playSound(sound_file);
  showColor(key_code - 48, color);
  currentSetTimeouts.push(createTimeoutThree(boxChangeBack, key_code - 48, 300));
}

function playLayer(layer) {
  var rest = 0;
  for (var i = 0; i < layer.length; i++) {
    var beat = layer[i];
    rest += beat.rest;
    currentSetTimeouts.push(createTimeoutFive(playKeypress, beat.keypress, beat.color, beat.sound, rest));
  }
}

function playTrack(track) {
  newInterval();
  if (looping === false) {
    $('#play-track').css('color', 'LimeGreen');
    setTimeout(function() {  $('#play-track').css('color', 'white'); }, interval);
  }
  else {
    loopingColor();
  }

  for (i = 0; i < track.length; i++) {
    playLayer(track[i]);
  }
}
