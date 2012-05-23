/*
Copyright (c) 2012, Matt Zanchelli
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
	* Redistributions of source code must retain the above copyright
	  notice, this list of conditions and the following disclaimer.
	* Redistributions in binary form must reproduce the above copyright
	  notice, this list of conditions and the following disclaimer in the
	  documentation and/or other materials provided with the distribution.
	* Neither the name of the <organization> nor the
	  names of its contributors may be used to endorse or promote products
	  derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

//	Create & Style results
var results = document.createElement("div");
results.setAttribute("id", "sendToInstapaperResults");
document.body.appendChild(results);

function displayBar(response)
{
	results.style.top = "0px";
	results.innerHTML = response;
	setTimeout( function() { results.style.top = "-50px"; }, 2500 );
}

//	Listen for contextual menus
window.addEventListener("contextmenu", handleContextualMenu, false);

//	Disable menu item if not a link?
<<<<<<< HEAD
function handleContextualMenu(event)
{
	console.log( "Contextual Menu in " + event.target.nodeName.toLowerCase() );
	if ( event.target.nodeName.toLowerCase() != "a" ) {
		//	Get disabling to work and add on/off preference for this feature
		// safari.self.tab.dispatchMessage("disable", true);
		safari.self.tab.dispatchMessage( "getLink", document.URL );
		console.log( "Getting: " + document.URL );
=======
function handleContextMenu(event) {
	console.log("Contextual Menu");
	console.log( event.target.nodeName.toLowerCase() );
	if ( event.target.nodeName.toLowerCase() != "a" ) {
		//	Get disabling to work and add on/off preference for this feature
		// safari.self.tab.dispatchMessage("disable", true);
		safari.self.tab.dispatchMessage("getLink", document.URL);
		console.log(document.URL);
>>>>>>> 1e7eea14d810c0691a3b9f6b22f86a2b854bda9e
	} else {
		safari.self.tab.dispatchMessage( "getLink", event.target.href );
		console.log( "Getting: " + event.target.href );
	}
}

//	Listen for keyboard commands
window.addEventListener("keydown", keyboardShortcut, false);

//	Execute command on keyboard shortcut
<<<<<<< HEAD
function keyboardShortcut()
{
	console.log("Keyboard: " + event.keyCode);
=======
function keyboardShortcut() {
	console.log("Keyboard Shorcut");
	console.log(event.keyCode);
>>>>>>> 1e7eea14d810c0691a3b9f6b22f86a2b854bda9e
	if ( event.target.nodeName.toLowerCase() !== "input" && event.altKey ) {
		safari.self.tab.dispatchMessage("keyboardShortcut", event.keyCode);
	}
}

//	Listen for results
safari.self.addEventListener("message", displayResults, false);

//	Display results
<<<<<<< HEAD
function displayResults(response)
{
	if ( response.name === "displayResults" ) {

		results.className = "";
		var text = "Saving...";

		// Handle different response codes here
=======
function displayResults(response) {
	if (response.name === "displayResults" ) {
		// Handle different response codes here
		results.style.top = "0px";	//	Reset display
		results.innerHTML = "Saving...";
		// console.log(response.message);
>>>>>>> 1e7eea14d810c0691a3b9f6b22f86a2b854bda9e
		if ( response.message == 200 || response.message == 201 ) {
			results.className = "success";
			text = "Sent to Instapaper!";
			displayBar(text)
			console.log(text);
		} else {
			results.className = "failed";
			if ( response.message == 403 ) {
				text = "Invalid username or password.";
				displayBar(text);
				console.log(text);
			} else if ( response.message == 400 ) {
				text = "Bad request or exceeded the rate limit. Check your Preferences.";
				displayBar(text);
				console.log(text);
			} else if ( response.message == 500 ) {
				text = "The service encountered an error. Please try again later.";
				displayBar(text);
				console.log(text);
			} else {
				text = "Unexpected error: " + response.message;
				displayBar(text);
				console.log(text);
			}
		}
	}
}

<<<<<<< HEAD
safari.self.addEventListener("message", displayDisplayBar, false);

function displayDisplayBar(response)
{
	if ( response.name = "displaydisplayBar" ) {
		displayBar("Saving...");
		console.log("saving...");
	}
=======
function hideResults() {
	results.style.top = "-50px";
	setTimeout( "results.className = ''", 500 );
>>>>>>> 1e7eea14d810c0691a3b9f6b22f86a2b854bda9e
}
