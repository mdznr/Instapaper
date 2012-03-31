
//	Listen for keyboard commands
window.addEventListener("keydown", keyboardShortcut, false);

//	Execute command on keyboard shortcut (Customisable?)
function keyboardShortcut() {
	if ( event.target.nodeName.toLowerCase() !== 'input' ) {
		if ( event.altKey && event.keyCode == "73" ) {	//	Shift + Alt (Option) + I
			sendTo("QMMUOk2ZEBse");
		}
	}
}

safari.self.addEventListener( "message", run, false );

function run(msg) {
	sendTo(msg.message);	//	sendTo with code (msg.message)
}

function sendTo(code) {
	var code = "QMMUOk2ZEBse";
	var d = document, z = d.createElement('scr'+'ipt'), b = d.body, l = d.location;
	try {
		if (!b) throw(0);
		d.title = '(Saving...) '+d.title;
		z.setAttribute('src', l.protocol+'//www.instapaper.com/j/'+code+'?u='+encodeURIComponent(l.href)+'&t='+(new Date().getTime()));
		b.appendChild(z);
	}
	catch(e) {
		alert( 'Please wait until the page has loaded.' );
	}
}
