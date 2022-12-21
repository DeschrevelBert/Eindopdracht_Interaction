let moonrise = "16:30";
let moonfall = "08:30";

/* --- Calculating Time of Night --- */
const TimeToMinutes = function(){
	let rise = moonrise.split(':');
	let set = moonfall.split(':');

	let beforeMidnight = 24 - parseInt(rise[0]);
	let beforeMidnightMinutes = beforeMidnight * 60 - parseInt(rise[1]);
	let afterMidnightMinutes = parseInt(set[0]) * 60 + parseInt(set[1]);
	console.log(beforeMidnightMinutes);
	console.log(afterMidnightMinutes);

	let nightTime = beforeMidnightMinutes + afterMidnightMinutes;

	return nightTime;
}

/* --- set variables in html --- */
const RiseAndSet = function(){
	document.querySelector('.js-moonrise').innerHTML = moonrise
	document.querySelector('.js-moonset').innerHTML = moonfall

	document.querySelector('.js-time-left').innerHTML = TimeToMinutes() + " minutes"
}

/* --- set moon opacity and time remaining --- */
const TimeOfNight = function(){
	document.querySelector('.js-beginOfNight').addEventListener('change', function(){
		if(document.querySelector('.js-beginOfNight').checked == true){
			document.querySelector('.js-moon-1').style.opacity = "100%"
			console.log('ITS TRUE')
			document.querySelector('.js-time-left').innerHTML = TimeToMinutes() + " minutes"
		}
		else if(document.querySelector('.js-beginOfNight').checked != true){
			document.querySelector('.js-moon-1').style.opacity = "0"
			console.log('ITS NOT TRUE')
		}
	});

	document.querySelector('.js-firstQuarter').addEventListener('change', function(){
		if(document.querySelector('.js-firstQuarter').checked == true){
			document.querySelector('.js-moon-2').style.opacity = "100%"
			document.querySelector('.js-time-left').innerHTML = TimeToMinutes()/4*3 + " minutes"
		}
		else if(document.querySelector('.js-beginOfNight').checked != true){
			document.querySelector('.js-moon-2').style.opacity = "0"
			document.querySelector('.js-time-left').innerHTML = TimeToMinutes() + " minutes"
		}
	});

	document.querySelector('.js-secondQuarter').addEventListener('change', function(){
		if(document.querySelector('.js-secondQuarter').checked == true){
			document.querySelector('.js-moon-3').style.opacity = "100%"
			console.log('ITS TRUE')
			document.querySelector('.js-time-left').innerHTML = TimeToMinutes()/4*2 + " minutes"
		}
		else if(document.querySelector('.js-beginOfNight').checked != true){
			document.querySelector('.js-moon-3').style.opacity = "0"
			console.log('ITS NOT TRUE')
			document.querySelector('.js-time-left').innerHTML = TimeToMinutes() + " minutes"
		}
	});

	document.querySelector('.js-thirdQuarter').addEventListener('change', function(){
		if(document.querySelector('.js-thirdQuarter').checked == true){
			document.querySelector('.js-moon-4').style.opacity = "100%"
			console.log('ITS TRUE')
			document.querySelector('.js-time-left').innerHTML = TimeToMinutes()/4 + " minutes"
		}
		else if(document.querySelector('.js-beginOfNight').checked != true){
			document.querySelector('.js-moon-4').style.opacity = "0"
			console.log('ITS NOT TRUE')
			document.querySelector('.js-time-left').innerHTML = TimeToMinutes() + " minutes"
		}
	});

	document.querySelector('.js-end').addEventListener('change', function(){
		if(document.querySelector('.js-end').checked == true){
			document.querySelector('.js-moon-5').style.opacity = "100%"
			console.log('ITS TRUE')
			document.querySelector('.js-time-left').innerHTML = "0" + " minutes"
		}
		else if(document.querySelector('.js-beginOfNight').checked != true){
			document.querySelector('.js-moon-5').style.opacity = "0"
			console.log('ITS NOT TRUE')
			document.querySelector('.js-time-left').innerHTML = TimeToMinutes() + " minutes"
		}
	});
}

/* --- set moon opacity 0 on load --- */
const OpacityMoonLoaded = function(){
	document.querySelector('.js-moon-1').style.opacity = "0"
	document.querySelector('.js-moon-2').style.opacity = "0"
	document.querySelector('.js-moon-3').style.opacity = "0"
	document.querySelector('.js-moon-4').style.opacity = "0"
	document.querySelector('.js-moon-5').style.opacity = "0"
}

/* --- set current time in html --- */
const Time = function(){
	//krijg de current time tot op de seconde te zien in de html
	const timeDisplay = document.querySelector('.c-time');
	const dateString = new Date().toLocaleString();
	const formattedString = dateString.replace(", ", " - ");
	timeDisplay.textContent = formattedString;
	TimeOfNight();
}

document.addEventListener('DOMContentLoaded', function() {
	Time();
	setInterval(Time, 1000);
	RiseAndSet();
	OpacityMoonLoaded();
	DayScreen();
});
