# ChromeHandoff
Works with a Shortcuts action on iOS to open mobile Safari webpages in the Chrome browser of a locally networked computer. Video demonstration at https://bit.ly/3g775NY.

Installation: make sure you have Node installed. You will also need Express. 

Download the iOS Shortcut here: https://www.icloud.com/shortcuts/090ea3b82eba4315b4d1aa682d80406f. 
After installing, be sure to change the IP in the URL request to your own local IPv4 address. Do this in the Shortcuts app on your iPhone.

Then, when you're ready to start listening for requests on the Windows machine, cd into your 'ChromeHandoff' directory and type: `node .\express-server.js'. This will start listening for page requests from mobile Safari. 

When browsing in mobile Safari, press the action (share) button in the bottom toolbar to bring up the "Open on PC" shortcut. If your network settings are right, you should be able to open that webpage on your local computer.

Hope this helps someone out there! Feel free to contribute or share ideas to improve this little project.
