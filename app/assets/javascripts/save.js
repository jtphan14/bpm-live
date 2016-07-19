//= require 'keypress'
// when guest clicks save
function guestSave() {
  $("#save-guest-button").click(function(e) {
    e.preventDefault();
    $(".save-popup").css("display", "block");
    // console.log("In Guest save.. tracks var:");
    // console.log(track);
    Cookies.set("guest_track", track, {expires: 1, path: "/"});
    // console.log("In Guest save.. cookies:");
    // console.log(Cookies.get('guest_track'));

  })
};

function clearCookies() {
  Cookies.remove('guest_track', { path: '/' });
  // after clear Cookies.get('guest_track') returns undefined
};

// save
function saveTrack() {
  $("#save").click(function(e) {
    e.preventDefault();
      console.log("i am in save and clicked");
    $(this).css('color', 'gray');
      setTimeout(function() { $('#save').css('color', 'white'); }, 200);
    // console.log("track before function. should be undefined b/c haven't recorded anything");
    // console.log(track);

    // if cookie not empty, there is a guest_track. &&..
    // if track is blank, i didn't try recording something else since i logged in.
    if ((typeof Cookies.get('guest_track') !== "undefined") && (track.length === 0)){
      // set tracks = guest_track cookies
      var cookies = Cookies.get('guest_track');
      track = JSON.parse(cookies);
    }

    // console.log("track after function.. should be same as cookies");
    // console.log(track);

    var name = prompt("Your track is lonely! Give it a name.");
    $("#my-tracks-button").css('color', 'yellow');
    setTimeout(function() { $("#my-tracks-button").css('color', 'white'); }, 1600);

    $.ajax({
      url: '/tracks',
      data: {'track': track, 'name': name},
      method: 'post'
    })

    .done(function(response) {
      // clear cookiherokes and track []'s after save track
      clearCookies();
      track = [];
    })

  })


}
