// Gathering the buttons
let buttonMenu1 = document.getElementById('buttonMenu1')
let buttonMenu2 = document.getElementById('buttonMenu2')
let buttonMenu3 = document.getElementById('buttonMenu3')
let buttonMenu4 = document.getElementById('buttonMenu4')
let buttonMenu5 = document.getElementById('buttonMenu5')
let buttonMenu6 = document.getElementById('buttonMenu6')
let buttonSound1 = document.getElementById('buttonSound1')
let buttonSound2 = document.getElementById('buttonSound2')
let buttonSound3 = document.getElementById('buttonSound3')
let buttonSound4 = document.getElementById('buttonSound4')
let buttonSound5 = document.getElementById('buttonSound5')
let buttonSound6 = document.getElementById('buttonSound6')
let buttonSound7 = document.getElementById('buttonSound7')
let buttonSound8 = document.getElementById('buttonSound8')
let buttonSound9 = document.getElementById('buttonSound9')
let buttonSound10 = document.getElementById('buttonSound10')
let buttonSound11 = document.getElementById('buttonSound11')
let buttonSound12 = document.getElementById('buttonSound12')
let buttonSound13 = document.getElementById('buttonSound13')
let buttonSound14 = document.getElementById('buttonSound14')
let buttonSound15 = document.getElementById('buttonSound15')
let buttonSound16 = document.getElementById('buttonSound16')
let buttonSound17 = document.getElementById('buttonSound17')

// Creating the Event and Event Listener
// (event type, function for each button) (I tried to use this method with classes but it only appears to work for the first instance)
buttonMenu1.addEventListener('mouseover', function run(){
    buttonMenu1.style.backgroundColor = 'orange'
})
buttonMenu1.addEventListener('mouseleave', function run(){
    buttonMenu1.style.backgroundColor = 'aqua'
})

buttonMenu2.addEventListener('mouseover', function run(){
    buttonMenu2.style.backgroundColor = 'orange'
})
buttonMenu2.addEventListener('mouseleave', function run(){
    buttonMenu2.style.backgroundColor = 'aqua'
})

buttonMenu3.addEventListener('mouseover', function run(){
    buttonMenu3.style.backgroundColor = 'orange'
})
buttonMenu3.addEventListener('mouseleave', function run(){
    buttonMenu3.style.backgroundColor = 'aqua'
})

buttonMenu4.addEventListener('mouseover', function run(){
    buttonMenu4.style.backgroundColor = 'orange'
})
buttonMenu4.addEventListener('mouseleave', function run(){
    buttonMenu4.style.backgroundColor = 'aqua'
})

buttonMenu5.addEventListener('mouseover', function run(){
    buttonMenu5.style.backgroundColor = 'orange'
})
buttonMenu5.addEventListener('mouseleave', function run(){
    buttonMenu5.style.backgroundColor = 'aqua'
})

buttonMenu6.addEventListener('mouseover', function run(){
    buttonMenu6.style.backgroundColor = 'orange'
})
buttonMenu6.addEventListener('mouseleave', function run(){
    buttonMenu6.style.backgroundColor = 'aqua'
})

/* Since I'm forced to run a function for each button there is good reason to group scales into a color code.*/

/* Color codes obtained from https://htmlcolorcodes.com */

/* 8 note scales to be in light green */
buttonSound1.addEventListener('mouseover', function run(){
    buttonSound1.style.backgroundColor = 'lightgreen'
})
buttonSound1.addEventListener('mouseleave', function run(){
    buttonSound1.style.backgroundColor = 'aqua'
})
buttonSound2.addEventListener('mouseover', function run(){
    buttonSound2.style.backgroundColor = 'lightgreen'
})
buttonSound2.addEventListener('mouseleave', function run(){
    buttonSound2.style.backgroundColor = 'aqua'
})
buttonSound3.addEventListener('mouseover', function run(){
    buttonSound3.style.backgroundColor = 'lightgreen'
})
buttonSound3.addEventListener('mouseleave', function run(){
    buttonSound3.style.backgroundColor = 'aqua'
})
buttonSound4.addEventListener('mouseover', function run(){
    buttonSound4.style.backgroundColor = 'lightgreen'
})
buttonSound4.addEventListener('mouseleave', function run(){
    buttonSound4.style.backgroundColor = 'aqua'
})
/* 7 note modes to be in lightseagreen */

buttonSound5.addEventListener('mouseover', function run(){
    buttonSound5.style.backgroundColor = 'lightseagreen'
})
buttonSound5.addEventListener('mouseleave', function run(){
    buttonSound5.style.backgroundColor = 'aqua'
})
buttonSound6.addEventListener('mouseover', function run(){
    buttonSound6.style.backgroundColor = 'lightseagreen'
})
buttonSound6.addEventListener('mouseleave', function run(){
    buttonSound6.style.backgroundColor = 'aqua'
})
buttonSound7.addEventListener('mouseover', function run(){
    buttonSound7.style.backgroundColor = 'lightseagreen'
})
buttonSound7.addEventListener('mouseleave', function run(){
    buttonSound7.style.backgroundColor = 'aqua'
})

/* Other 7 note scales to be in yellow */
buttonSound8.addEventListener('mouseover', function run(){
    buttonSound8.style.backgroundColor = 'yellow'
})
buttonSound8.addEventListener('mouseleave', function run(){
    buttonSound8.style.backgroundColor = 'aqua'
})
buttonSound9.addEventListener('mouseover', function run(){
    buttonSound9.style.backgroundColor = 'yellow'
})
buttonSound9.addEventListener('mouseleave', function run(){
    buttonSound9.style.backgroundColor = 'aqua'
})
buttonSound10.addEventListener('mouseover', function run(){
    buttonSound10.style.backgroundColor = 'yellow'
})
buttonSound10.addEventListener('mouseleave', function run(){
    buttonSound10.style.backgroundColor = 'aqua'
})
buttonSound11.addEventListener('mouseover', function run(){
    buttonSound11.style.backgroundColor = 'yellow'
})
buttonSound11.addEventListener('mouseleave', function run(){
    buttonSound11.style.backgroundColor = 'aqua'
})
buttonSound12.addEventListener('mouseover', function run(){
    buttonSound12.style.backgroundColor = 'yellow'
})
buttonSound12.addEventListener('mouseleave', function run(){
    buttonSound12.style.backgroundColor = 'aqua'
})

/* 6 note scales to be in cornflowerblue */
buttonSound13.addEventListener('mouseover', function run(){
    buttonSound13.style.backgroundColor = 'cornflowerblue'
})
buttonSound13.addEventListener('mouseleave', function run(){
    buttonSound13.style.backgroundColor = 'aqua'
})
buttonSound14.addEventListener('mouseover', function run(){
    buttonSound14.style.backgroundColor = 'cornflowerblue'
})
buttonSound14.addEventListener('mouseleave', function run(){
    buttonSound14.style.backgroundColor = 'aqua'
})
buttonSound15.addEventListener('mouseover', function run(){
    buttonSound15.style.backgroundColor = 'cornflowerblue'
})
buttonSound15.addEventListener('mouseleave', function run(){
    buttonSound15.style.backgroundColor = 'aqua'
})

/* 5 note scales to be in orange */
buttonSound16.addEventListener('mouseover', function run(){
    buttonSound16.style.backgroundColor = 'orange'
})
buttonSound16.addEventListener('mouseleave', function run(){
    buttonSound16.style.backgroundColor = 'aqua'
})

/* Scales of less than 5 notes to be in red */
buttonSound17.addEventListener('mouseover', function run(){
    buttonSound17.style.backgroundColor = 'red'
})
buttonSound17.addEventListener('mouseleave', function run(){
    buttonSound17.style.backgroundColor = 'aqua'
})

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.querySelector('audio');
    audio.removeAttribute('controls');
});