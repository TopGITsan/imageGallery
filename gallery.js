const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i=1; i<=5; i++) {
	let newImage = document.createElement('img');
	newImage.setAttribute('src', './images/pic'+ i +'.jpg');
	thumbBar.appendChild(newImage);
	newImage.onclick = (e)=>{
		let imgSrc = e.target.getAttribute('src');
		displayImg(imgSrc);
	}	
}

function displayImg(source){
	displayedImage.setAttribute('src',source);
}
/* Wiring up the Darken/Lighten button */

