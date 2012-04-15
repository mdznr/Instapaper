
//	Listen for contextual menus
window.addEventListener("contextmenu", handleContextMenu, false);

//	Disable menu item if not a link?
function handleContextMenu(event) {
	// console.log("Contextual Menu");
	console.log( event.target.nodeName.toLowerCase() );
	if ( event.target.nodeName.toLowerCase() != "a" ) {
		//	Get disabling to work and add on/off preference for this feature
		safari.self.tab.dispatchMessage("disable", true);
		safari.self.tab.dispatchMessage("getLink", document.URL);
	} else {
		safari.self.tab.dispatchMessage("getLink", event.target.href);
		console.log(event.target.href);	//	For debugging
	}
}

//	Listen for keyboard commands
window.addEventListener("keydown", keyboardShortcut, false);

//	Execute command on keyboard shortcut
function keyboardShortcut() {
	console.log(event.keyCode);
	if ( event.target.nodeName.toLowerCase() !== "input" && event.altKey ) {
		safari.self.tab.dispatchMessage("keyboardShortcut", event.keyCode);
	}
}

//	Create & Style results
var results = document.createElement("div");
results.setAttribute("id", "sendToInstapaperResults");
document.body.appendChild(results);

//	Listen for results
safari.self.addEventListener("message", displayResults, false);

//	Display results
function displayResults(response) {
	if (response.name === "displayResults" ) {
		//	Handle different response codes here
		results.style.top = "0px";	//	Reset display
		// results.innerHTML = "Saving...";
		if ( response.message == 200 || response.message == 201 ) {
			results.className = "success";
			results.innerHTML = "Sent to Instapaper!";
		} else {
			results.className = "failed";
			if ( response.message == 403 ) {
				results.innerHTML = "Invalid username or password.";
			} else if ( response.message == 400 ) {
				results.innerHTML = "Bad request or exceeded the rate limit. Check your Preferences.";
			} else if ( response.message == 500 ) {
				results.innerHTMl = "The service encountered an error. Please try again later.";
			} else {
				results.innerHTMl = "Unexpected error: " + response.message;
			}
		}
		setTimeout( "hideResults()", 2500 );
	}
}

function hideResults() {
	results.style.top = "-50px";
	results.className = "";	//	Clear class
}
