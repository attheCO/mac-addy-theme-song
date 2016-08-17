#Play a theme song when a MAC address hits the network

##todos:

[ ] fetch MAC addresses on network
[ ] store all new MACs
[ ] record firstSeenToday && lastSeen timestamps
[ ] play song, if first time seen today
[ ] assign specific song to specific MAC address
[ ] add //play song// action to queue, if multiple devices enter network at the same time

##setup

- `npm install`
- `node main.js` to see libnmap output
- ...


##Depedencies:

- https://github.com/jas-/node-libnmap `sudo nmap -sP -oX outputMacAddytheCO.xml 10.10.1.0/24`, but can use JSON for output. [see libnmap in action](https://gist.github.com/jas-/eae6b0c6e82a4e072b97)
- 
