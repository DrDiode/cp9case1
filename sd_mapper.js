/*
	New Perspectives on HTML5 and CSS3, 7th Edition
	Tutorial 9
	Case Problem 1

	Planisphere Script
	Author:	Andrew J. Noest
	Date:	1/6/2020
*/

// Declare a date and time 
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

document.getElementById("timeStamp").innerHTML = timeStr;

// Determine the sky map to use for date and time
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2*thisMonth+thisHour) % 24;
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

// Insert the HTML code for the image of the sky map
document.getElementById("planisphere").insertAdjacentHTML('afterBegin', imgStr);