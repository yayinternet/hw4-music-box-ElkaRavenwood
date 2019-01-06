// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {

  constructor(containerElement) {
  	this.containerElement = containerElement;
  	this.theme;
  	this.song;
  	this.gif;
  	

    // TODO(you): Implement the constructor and add fields as necessary.
    let aud = new AudioPlayer();
    
    let play = new PlayButton();
  }

  // TODO(you): Add methods as necessary.
  hide() {
  	this.containerElement.classList.add('inactive');
  }

  show () {
  	this.containerElement.classList.remove('inactive');
  }

}
