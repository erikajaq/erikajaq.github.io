
document.addEventListener("keypress", handleKeyPress)

function handleKeyPress(evt) {
	
	console.log (evt.key)

	var key = evt.key
	console.log("key", key)

	var totalHeight = document.body.offsetHeight

	var percentage = key / 9 
	console.log("%", percentage) 

	var targetHeight = percentage * totalHeight 
	console.log("px", targetHeight) 

	window.scrollTo(0,key * 100)

}





