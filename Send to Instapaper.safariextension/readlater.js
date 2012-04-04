
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
