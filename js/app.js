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
	const beginOfNight = document.querySelector('.js-beginOfNight')
	const firstQuarter = document.querySelector('.js-firstQuarter')
	const secondQuarter = document.querySelector('.js-secondQuarter')
	const thirdQuarter = document.querySelector('.js-thirdQuarter')
	const end = document.querySelector('.js-end')

	const moon1 = document.querySelector('.js-moon-1')
	const moon2 = document.querySelector('.js-moon-2')
	const moon3 = document.querySelector('.js-moon-3')
	const moon4 = document.querySelector('.js-moon-4')
	const moon5 = document.querySelector('.js-moon-5')

	moon1.style.opacity = '0';
	moon2.style.opacity = '0';
	moon3.style.opacity = '0';
	moon4.style.opacity = '0';
	moon5.style.opacity = '0';

	if(beginOfNight.checked == true){
		moon1.style.opacity = '100%';
		document.querySelector('.js-time-left').innerHTML = "8 hours"
	}
	if(firstQuarter.checked == true){
		moon2.style.opacity = '100%';
		document.querySelector('.js-time-left').innerHTML = "6 hours"
	}
	if(secondQuarter.checked == true){
		moon3.style.opacity = '100%';
		document.querySelector('.js-time-left').innerHTML = "4 hours"
	}
	if(thirdQuarter.checked == true){
		moon4.style.opacity = '100%';
		document.querySelector('.js-time-left').innerHTML = "2 hours"
	}
	if(end.checked == true){
		moon5.style.opacity = '100%';
		document.querySelector('.js-time-left').innerHTML = "0 hours"
	}
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
