//making the balls move around when i click//

/*document.addEventListener("click", handleClick)

function handleClick(evt) {


	var redBall = document.getElementsByClassName('redball')[0]

	redBall.style.left = "650px"; 

} */
var redBall = document.getElementsByClassName('redball')[0]
redBall.addEventListener("click", handleClick)

function handleClick(evt) {
	redBall.style.left = "650px"; redBall.style.backgroundColor = "white";
}


var blueBall = document.getElementsByClassName('blueball')[0]
blueBall.addEventListener("click", handleClick2)
function handleClick2(evt) {
	blueBall.style.left = "570px"; blueBall.style.backgroundColor = "black";
}


var greenBall = document.getElementsByClassName('greenball')[0]
greenBall.addEventListener("click", handleClick3)
function handleClick3(evt) {
	greenBall.style.left = "750px"; greenBall.style.backgroundColor = "white";
}

var yellowBall = document.getElementsByClassName('yellowball')[0]
yellowBall.addEventListener("click", handleClick4)
function handleClick4(evt){
	yellowBall.style.left = "750px";
	yellowBall.style.top = "400px";
    yellowBall.style.backgroundColor = "black";
}

var orangeBall = document.getElementsByClassName('orangeball')[0]
orangeBall.addEventListener("click", handleClick5)
function handleClick5(evt){
	orangeBall.style.left = "850px"; orangeBall.style.backgroundColor = "white";
}

var pinkBall = document.getElementsByClassName('pinkball')[0]
pinkBall.addEventListener("click", handleClick6)
function handleClick6(evt){
	pinkBall.style.left = "550px";
	pinkBall.style.top = "400px"; 
    pinkBall.style.backgroundColor = "black";
}

var purpleBall = document.getElementsByClassName('purpleball')[0]
purpleBall.addEventListener("click", handleClick7)
function handleClick7(evt){
	purpleBall.style.left = "775px"; purpleBall.style.backgroundColor = "white";
}

var aquaBall = document.getElementsByClassName('aquaball')[0]
aquaBall.addEventListener("click", handleClick8)
function handleClick8(evt){
	aquaBall.style.left = "655px"; 
	aquaBall.style.top = "300px";
    aquaBall.style.backgroundColor = "black";
}


//trying to make the thing dragable//

var selected = null,
    x_pos = 0, y_pos = 0,
    x_elem = 0, y_elem = 0;

function _drag_init(elem) {
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    
    if (selected !== null) {
    	// this is where the cornpopper actually moves
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';

        //Math.random() * 100 // 0-100
        //Math.random() * 5 + 10 // 10-15
        
        redBall.style.left = Math.random() * 100 + 600 + "px";
        redBall.style.top = Math.random() * 100 + 300 + "px";

        blueBall.style.left = Math.random() * 100 + 650 + "px";
        blueBall.style.top = Math.random() * 100 + 240 + "px";

        greenBall.style.left = Math.random() * 100 + 600 + "px";
        greenBall.style.top = Math.random() * 100 + 250 + "px";

        yellowBall.style.left = Math.random() * 100 + 550 + "px";
        yellowBall.style.top = Math.random() * 100 + 310 + "px";

        orangeBall.style.left = Math.random() * 100 + 710 + "px";
        orangeBall.style.top = Math.random() * 100 + 250 + "px";

        pinkBall.style.left = Math.random() * 100 + 750 + "px";
        pinkBall.style.top = Math.random() * 100 + 310 + "px";

        purpleBall.style.left = Math.random() * 100 + 515 + "px";
        purpleBall.style.top = Math.random() * 100 + 310 + "px";

        aquaBall.style.left = Math.random() * 100 + 700 + "px";
        aquaBall.style.top = Math.random() * 100 + 310 + "px";


        //turn  volume up//
        var audio = document.getElementById("audio");
        audio.volume = 5;
    }
}
function _destroy() {
    selected = null;
    //turn volume down in destroy//
    var audio = document.getElementById("audio");
        audio.volume = 0;
}

document.getElementById('cornpopper').onmousedown = function () {
	console.log("!")
    _drag_init(this);
    return false;
};

window.onmousemove = _move_elem
window.onmouseup = _destroy


//


