/* Author: Andrew Barrett
 * Date Created: 2/24/21
 * Purpose: Set up a web server that listens for POST requests on the local network to display a web page.
 *
*/

// Use node-windows to run this script in the background as a service (and support launch on login)
var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Windows Handoff',
  description: 'Allows opening websites in Chrome that are open in Safari on an iPhone',
  script: require('path').join(__dirname,'express-server.js')
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('uninstall',function(){
  svc.start();
  console.log('uninstalled');
});

svc.uninstall();
