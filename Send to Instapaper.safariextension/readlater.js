
//	Listen for contextual menus
window.addEventListener("contextmenu", handleContextMenu, false);

//	Disable menu item if not a link?
function handleContextMenu(event) {
	if ( event.target.nodeName != "A" ) {
		safari.self.tab.dispatchMessage("disable", true);
	} else {
		safari.self.tab.dispatchMessage("getLink", event.target.href);
		console.log(event.target.href);	//	For debugging
	}
}

//	Listen for keyboard commands
window.addEventListener("keydown", keyboardShortcut, false);

//	Execute command on keyboard shortcut (Customisable?)
function keyboardShortcut() {
	if ( event.target.nodeName.toLowerCase() !== 'input' ) {
		if ( event.altKey && event.keyCode == "73" ) {	//	Shift + Alt (Option) + I
			safari.self.tab.dispatchMessage("keyboardShortcut", true);
		}
	}
}

//	Create & Style results
var results = document.createElement("div");
results.setAttribute("id", "result");
results.style.position = "fixed";
results.style.top = "0px";
results.style.margin = "auto";
results.style.font = "Helvetica";	//	Y u no work!?
document.body.insertBefore(results, document.body.firstChild);

//	Listen for results
safari.self.addEventListener("message", displayResults, false);

//	Display results
function displayResults(response) {
	if (response.name === "displayResults" ) {
		//	Handle different response codes here
		if ( response.message == 200 || response.message == 201 ) {
			results.innerHTML = "Successfully sent to Instapaper!";
		} else if ( response.message == 403 ) {
			results.innerHTML = "Invalid username or password.";
		} else if ( response.message == 400 ) {
			results.innerHTML = "Bad request or exceeded the rate limit. Check your Preferences.";
		} else if ( response.message == 500 ) {
			results.innerHTMl = "The service encountered an error. Please try again later.";
		} else {
			results.innerHTMl = "Unexpected error: " + response.message;
		}
	}
}
