// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(url) {
    // TODO(you): Implement the constructor and add fields as necessary.
	this.onJsonReady = this.onJsonReady.bind(this);
	this.onResponse = this.onResponse.bind(this);
	this.changeGif = this.changeGif.bind(this);
	
	this.urls = [];
	this.index = 0;
	this.nextGif = document.createElement('img');
	// this.gifs = document.querySelectorAll("gif");
	fetch(url).then(this.onResponse).then(this.onJsonReady);
	
  }
  // TODO(you): Add methods as necessary.

  onResponse(response) {
  	return response.json();
  }


  onJsonReady (json) {
  	for (const result of json.data) {
       this.urls.push(result.images.downsized.url);
    }

  	this.index = Math.floor(Math.random() * this.urls.length);
    this.newGif(true);
    this.newGif(false);
   }


   newGif (first) {
   	let displayContainer = document.getElementById('displayArea');
   	  	
   	let pic = document.createElement('img');
	// pic.style.width = '100%';
	pic.style.height = '50vw';
   	
   	pic.src = this.urls[this.index];
   	pic.classList.add('image');
   	
   	if (first) {
   		this.nextGif = pic;
   	} else {
   		displayContainer.appendChild(pic);
   	}

   }
    
  
  changeGif () {
	let displayContainer = document.getElementById('displayArea');
  	
    
  	let randInt= Math.floor(Math.random() * this.urls.length);
  	while (this.index === randInt) {
  		randInt = Math.floor(Math.random() * this.urls.length);
  	}

  	let pic = document.createElement('img');
    // pic.style.width = '100%';
    pic.style.height = '50vw';

  	pic.src = this.urls[randInt];

    pic.classList.add('image');
    displayContainer.innerHTML = "";
  	displayContainer.appendChild(this.nextGif);

    this.nextGif = pic;
  	
  }

}