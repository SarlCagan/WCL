
function colorSwitchVIP() {
	var x = document.getElementById('VIP');
	
	if (x.className.match("dark")) {
		x.className = 'activeVIP';
	} else {
		x.className = 'dark';
	}
}
function colorSwitchTele() {
	var y = document.getElementById('TM');
	if (y.className.match("dark")) {
		y.className = 'activeTele'
	} 
	else 
		y.className = 'dark'
	
}
function colorSwitchRude() {
	var z = document.getElementById('Rude');
	if (z.className.match("dark")) {
		z.className = 'activeRude'
	} 
	else {
		z.className = 'dark'
	}
}