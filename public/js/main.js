$(document).ready(function(){
player();
});

function player(){
  var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player;

      player = new YT.Player('player', {
      preload: 'auto',
          height: '300',
          width: '630',
          videoId: 'h9RLriX3u54?rel=0&amp;autoplay=1'});

     //player.playVideo();

}
    

// function player(){
//   var tag = document.createElement('script');
//       tag.src = "https://www.youtube.com/iframe_api";
//       var firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//       var player;

//       player = new YT.Player('player', {
//       preload: 'auto',
//           height: '300',
//           width: '630',
//           videoId: 'h9RLriX3u54?rel=0&amp;autoplay=1'});

//      //player.playVideo();

// }