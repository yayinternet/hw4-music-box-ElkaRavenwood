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
    this.changeGif();
    }
//   }

  changeGif () {

  	let displayContainer = document.getElementById('displayArea');
    let pic = document.createElement('img');
    pic.style.width = '100%';
    pic.style.height = '100%';

    if (this.index < this.urls.length) {
  		pic.src = this.urls[this.index];	
    	this.index++;
  	} else {
  		pic.src = this.urls[0];
  		this.index = 0;
  	}

    pic.classList.add('image');
    displayContainer.appendChild(pic);

  	
  }

}