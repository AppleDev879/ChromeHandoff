/* Author: Andrew Barrett
 * Date Created: 2/24/21
 * Purpose: Set up a web server that listens for POST requests on the local network to display a web page.
 *
*/

// Use Express to host the web server
const express = require('express');
const app = express()

// Use 'child_process' to execute Powershell requests
const { exec } = require("child_process");

// Port to listen on    
const port = 3000

// "Password" is just a required json parameter in the POST request to make sure it comes from a device I've authorized
const password = 'apple1857'

// Install middleware to make json readable
app.use(express.json())

// Capture POST request
app.post('/', (req, res) => {
  console.log('Received url: ' + req.body.url);
  
  // Check that the request includes the password
  if (req.body.password == password) {
    // Create Powershell script to open Chrome from requested url
    script = 'start chrome.exe "' + req.body.url + '"'
    // Run the script
    exec(script, (error, stdout, stderr) => {
      // Log errors
      if (error) {
          console.log.error(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log.error(`stderr: ${stderr}`);
          return;
      }
    });
    res.send("Works");
  }
})

// Listen for requests on a given port
app.listen(port, () => {
  console.log(`WindowsHandoff listening at http://localhost:${port}`)
})

// we want to run 'start chrome www.macrumors.com' , with the url provided in req

// idea is to use Express to listen for a POST request containing the desired url

// then we will run a batch script that opens the webpage