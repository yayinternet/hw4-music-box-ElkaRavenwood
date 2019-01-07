// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.

// There is security around the JSON file online, and we have no key to access it. Thus, we copied the map into the file
const songs  = {
	  "cranes": {
	    "songUrl": "https://yayinternet.github.io/hw4-music/songs/solange-cranes-kaytranada.mp3",
	    "title": "Cranes in the Sky [KAYTRANADA Remix]",
	    "artist": "Solange"
	  },
	  "timeless": {
	    "songUrl": "https://yayinternet.github.io/hw4-music/songs/james-blake-timeless.mp3",
	    "title": "Timeless",
	    "artist": "James Blake"
	  },
	  "knock": {
	    "songUrl": "https://yayinternet.github.io/hw4-music/songs/knockknock.mp4",
	    "title": "Twice",
	    "artist": "Knock Knock"
	  },
	  "deep": {
	    "songUrl": "https://yayinternet.github.io/hw4-music/songs/janet-jackson-go-deep.mp3",
	    "title": "Go Deep [Alesia Remix]",
	    "artist": "Janet Jackson"
	  },
	  "discretion": {
	    "songUrl": "https://yayinternet.github.io/hw4-music/songs/mitis-innocent-discretion.mp3",
	    "title": "Innocent Discretion",
	    "artist": "MitiS"
	  },
	  "spear": {
	    "songUrl": "https://yayinternet.github.io/hw4-music/songs/toby-fox-spear-of-justice.mp3",
	    "title": "Spear of Justice (ALMOST NO KICKS)",
	    "artist": "Toby Fox"
	  }
	}

class MenuScreen {
  constructor(containerElement) {
  	this.containerElement = containerElement;
  	// TODO(you): Implement the constructor and add fields as necessary.
    
	// console.log(songs.keys().length);
	this.makeSongList();
	this.makeThemes();

	this.goButton = document.getElementById("go");
	// this.goButton.addEventListener('click', function(event) {
	// });

	this.goButton.addEventListener('click', this.onClick);

	// Not on go button
	// this.goButton.addEventListener('keyDown', this.go);


  }
  // TODO(you): Add methods as necessary.

  makeSongList() {
  	const selectContainer = document.getElementById("song-selector");
  	// let songList = fetch('https://yayinternet.github.io/hw4-music/songs.json');
		let songTitle = {};

		for (const key in songs) {
			
			for (const innerKey in songs[key]) {

				if (innerKey === 'title') {
				  let option = document.createElement('option');
					let text = document.createTextNode(songs[key][innerKey]);
					option.appendChild(text);
					selectContainer.appendChild(option);
					songTitle[key] = songs[key][innerKey];
				}
			}
		}
  }

  makeThemes () {
  	const themes = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
  	let container = document.getElementById("query-input");
  	let randNum = Math.floor(Math.random() * themes.length);
  	container.placeholder = themes[randNum];
  }

  onClick (event) {
  	event.preventDefault(); // Prevents default
		let container = document.getElementById("query-input");

		let theme = container.value;
		if (theme === ""){
			theme = container.placeholder;
		}

		let selected = document.querySelector("option:checked").childNodes[0].textContent;
		console.log("Theme: " + theme);
		console.log("Choice: " + selected);

		const info = {
			'chosenTheme': theme,
			'choice': selected,
		};
		
		document.dispatchEvent(
	        new CustomEvent('buttonClicked', { detail: info }));
		
		app.menu.hide();

		app.music.show();
  }

  hide() {
  	this.containerElement.classList.add('inactive');
  }

  show () {
  	this.containerElement.classList.remove('inactive');
  }

}
