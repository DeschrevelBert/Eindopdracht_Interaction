// _ = helper functions

let moonrise = "16:30";
let moonfall = "8:30";

function _parseMillisecondsIntoReadableTime(timestamp) {
	//Get hours from milliseconds
	const date = new Date(timestamp * 1000);
	// Hours part from the timestamp
	const hours = '0' + date.getHours();
	// Minutes part from the timestamp
	const minutes = '0' + date.getMinutes();
	// Seconds part from the timestamp (gebruiken we nu niet)
	// const seconds = '0' + date.getSeconds();

	// Will display time in 10:30(:23) format
	return hours.substr(-2) + ':' + minutes.substr(-2); //  + ':' + s
}

const RiseAndSet = function(){
	document.querySelector('.js-moonrise').innerHTML = moonrise
	document.querySelector('.js-moonset').innerHTML = moonfall
}

const TimeOfNight = function(){
	document.querySelector('.js-beginOfNight').addEventListener('change', function(){
		if(document.querySelector('.js-beginOfNight').checked == true){
			document.querySelector('.js-moon-1').style.opacity = "100%"
			console.log('ITS TRUE')
		}
		else if(document.querySelector('.js-beginOfNight').checked != true){
			document.querySelector('.js-moon-1').style.opacity = "0"
			console.log('ITS NOT TRUE')
		}
	});

	document.querySelector('.js-firstQuarter').addEventListener('change', function(){
		if(document.querySelector('.js-firstQuarter').checked == true){
			document.querySelector('.js-moon-2').style.opacity = "100%"
		}
		else if(document.querySelector('.js-beginOfNight').checked != true){
			document.querySelector('.js-moon-2').style.opacity = "0"
		}
	});

	document.querySelector('.js-secondQuarter').addEventListener('change', function(){
		if(document.querySelector('.js-secondQuarter').checked == true){
			document.querySelector('.js-moon-3').style.opacity = "100%"
			console.log('ITS TRUE')
		}
		else if(document.querySelector('.js-beginOfNight').checked != true){
			document.querySelector('.js-moon-3').style.opacity = "0"
			console.log('ITS NOT TRUE')
		}
	});

	document.querySelector('.js-thirdQuarter').addEventListener('change', function(){
		if(document.querySelector('.js-thirdQuarter').checked == true){
			document.querySelector('.js-moon-4').style.opacity = "100%"
			console.log('ITS TRUE')
		}
		else if(document.querySelector('.js-beginOfNight').checked != true){
			document.querySelector('.js-moon-4').style.opacity = "0"
			console.log('ITS NOT TRUE')
		}
	});

	document.querySelector('.js-end').addEventListener('change', function(){
		if(document.querySelector('.js-end').checked == true){
			document.querySelector('.js-moon-5').style.opacity = "100%"
			console.log('ITS TRUE')
		}
		else if(document.querySelector('.js-beginOfNight').checked != true){
			document.querySelector('.js-moon-5').style.opacity = "0"
			console.log('ITS NOT TRUE')
		}
	});
}

const Time = function(){
	//krijg de current time tot op de seconde te zien in de html
	const timeDisplay = document.querySelector('.c-time');
	const dateString = new Date().toLocaleString();
	const formattedString = dateString.replace(", ", " - ");
	timeDisplay.textContent = formattedString;
	TimeOfNight();
}


document.addEventListener('DOMContentLoaded', function() {
	// 1 We will query the API with longitude and latitude.
	Time();
	setInterval(Time, 1000);
	RiseAndSet();
});
