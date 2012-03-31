
window.addEventListener("keydown", keyboardShortcut, false);

function keyboardShortcut()
{
	if ( event.target.nodeName.toLowerCase() !== 'input' ) {
		if ( event.altKey && event.keyCode == "73" ) {
			safari.self.tab.dispatchMessage( "shortcut", true);
			cmon("QMMUOk2ZEBse");
		}
	}
}

safari.self.addEventListener( "message", run, false );

function run(msg) {
	cmon(msg.message);
}

function cmon(code) {
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
