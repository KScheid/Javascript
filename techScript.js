var checkedBoxAmnt = document.getElementById("check"), //variables
    time = document.getElementById("time"),
    imgIndex = document.getElementById("imgIndex"),
    startSlide = document.getElementById("startSlide"),
    contact = document.getElementById("contact"),
    modified = document.getElementById("footer"),
    dateMod = new Date(document.lastModified),
    imgSet = ["images/Icons/pushbullet.png",
              "images/Icons/owatc.png",
              "images/Icons/uplay.gif",
              "images/Icons/traktTV.png",
              "images/Icons/wordpress.gif",
              "images/Icons/youtube.png",
              "images/Icons/amazon.png",
              "images/Icons/drive.png",
              "images/Icons/facebook.png",
              "images/Icons/gmail.png",
              "images/Icons/newegg.gif"];
//Index page JavaScript
//has 3 javascript & 1 JQuery
function startclock() { //function for clock
    var theTime = new Date(),
        hours = theTime.getHours(),
        mins = theTime.getMinutes(),
        secn = theTime.getSeconds(),
        ap = (hours <= 12) ? "am" : "pm",
        clockDiv = document.getElementById("clockDiv");
    hours = (hours >= 13) ? hours -= 12 : hours;
    hours = (hours < 1) ? 12 : hours;
    mins = (mins < 10) ? "0" + mins : mins;
    time.innerHTML = hours + ":" + mins + ap;
    setTimeout(function () {
        startclock();
    }, 1000);
}

function checkboxAmnt() { //gets score from checkboxes
    event.preventDefault();
    var amntChecked = ($(":checkbox:checked").length), //JQUERY!!!
        score = Math.round((amntChecked / 7) * 100);
    if (score == 100) {
        alert("Congrats you got 100%");
    } else {
        alert("You have " + score + "% completed");
    }
}
modified.innerHTML = dateMod;

//Design Page Javascript
//has 1 javascript
function startSlideShow() {
    setInterval(function () {
        var randIndex = Math.floor(Math.random() * imgSet.length);
        imgIndex.src = imgSet[randIndex];
    }, 2000);
}
startclock();

//Contact Page Javascript
//has 1 javascript
function validate() {
    var number = document.getElementById("number").value,
        email = document.getElementById("email").value,
        matchNum = /^\d{3}-\d{3}-\d{4}$/;
    if (number === "" || email === "") {
        alert("Please Fill out Form");
    } else {
        if (matchNum.test(number)) {
            alert("Thank You Phone Number Correct"); 
        } else {
            alert("please use valid format (XXX-XXX-XXXX)");

        }
    }
}
//total= 5 javascript instances and 1 jquery