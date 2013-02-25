/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */
var Cloud = require('ti.cloud');
Cloud.debug = true;  // optional; if you add this line, set it to false for production

Titanium.UI.setBackgroundColor('#fff');

var tabGroup = Titanium.UI.createTabGroup();

var login = Titanium.UI.createWindow({
	title:'Itexico',
	tabBarHidden:true,
	url:'login.js'
});

var profileWindow = Titanium.UI.createWindow({
	title: 'Itexico',
	backgroudColor: '#fff'
});

var picturesWindow = Titanium.UI.createWindow({
	title: 'Itexico',
	backgroudColor: '#fff'
});

var tabGroup = Titanium.UI.createTabGroup();

var loginTab = Titanium.UI.createTab({
	title:"Login",
	window:login
});

var PicturesTab = Titanium.UI.createTab({
	title:"Pictures",
	window:picturesWindow
});

var ProfileTab = Titanium.UI.createTab({
	title:"Profile",
	window:profileWindow
});



tabGroup.addTab(loginTab);
tabGroup.addTab(PicturesTab);
tabGroup.addTab(ProfileTab);
tabGroup.open();
