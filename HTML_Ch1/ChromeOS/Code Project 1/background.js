chrome.app.runtime.onLaunched.addListener(function() {
										  
	chrome.app.window.create('projectdetails.html', {
		'outerBounds': {
		'width': 400,
		'height': 550
		}
	});
});