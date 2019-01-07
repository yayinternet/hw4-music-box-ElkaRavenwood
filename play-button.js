// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.playing = true;
    this.container = document.querySelector("#button");
    this.toggle = this.toggle.bind(this);

    this.container.addEventListener('click', this.toggle);
  }
  
  // TODO(you): Add methods as necessary.
  toggle(event) {
    if (this.playing) {
      this.pause();
    }
    else {
      this.play();
    }
    this.playing = !this.playing;
  }

  play() {
    this.container.style.backgroundImage = "url(images/pause.png)";
    app.music.aud.play();
  }

  pause() {
    this.container.style.backgroundImage = "url(images/play.png)";
    app.music.aud.pause();
  }
}

