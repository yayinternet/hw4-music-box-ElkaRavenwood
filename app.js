// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {

  constructor(menu, music) {
    // TODO(you): Implement the constructor and add fields as necessary.
	// Makes menu screen
	
	this.menu = menu;
	this.music = music;

	// this.menu = new MenuScreen(document.getElementById("menu"));

	// // Makes music screen
	// this.music = new MusicScreen(document.getElementById("music"));

	document.addEventListener('buttonClicked', this.buttonClickedListener);
	
  }
  
  // TODO(you): Add methods as necessary.
  buttonClickedListener (event) {
  	app.music.theme = event.detail.chosenTheme;
  	app.music.song = event.detail.choice;

  	let url = "http://api.giphy.com/v1/gifs/search?q=" + event.detail.chosenTheme + "&api_key=dc6zaTOxFJmzC&limit=25&rating=g";
  	// url.replace(" ", "%20");
  	app.music.gif = new GifDisplay(url);
  }

}
