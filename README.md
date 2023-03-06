## How to run the tests?
In order to run the suit it is necessary to have a couple of things setup first. 

Step 1:
we need to start by installing nodejs and npm on it's latest version, this process is going to vary depending on the OS that we are using. Here I share some good tutorials from internet on how to setup this tool on Windows, Mac and Linux:

>[Install NodeJs and NPM on Mac](https://medium.com/@hayasnc/how-to-install-nodejs-and-npm-on-mac-using-homebrew-b33780287d8f)

>[Install NodeJs and NPM on windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows#ftoc-heading-1)

>[Install NodeJs and NPM on Linux](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/)


Step 2:
Clone the suit repository clicking download from the source code on github. (Don't forget to extract the zip file content.)
![Source code screenshot](https://raw.githubusercontent.com/JParedes98/cypress_studio_on_magento/main/source_code_ss.png)


Step 3:
Open a terminal or command line and move inside the project by running:
cd /path/to/cypress_studio_on_magento

Step 4:
Install cypress studio by running:
npm install

Step 5:
Run the tests with:
./node_modules/.bin/cypress run
