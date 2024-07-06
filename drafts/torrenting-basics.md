# What is BitTorrent 

BitTorrent is a P2P (peer to peer) file sharing protocol. "Protocol" in this context means "internet protocol", the procedure used for transmitting data over the internet (ex. HTTP, FTP, SMTP). However most internet protocols are centralized, meaning there is a "server" which sends the data when user requests a file.

Peer to peer means there is no central server, instead, people who previously downloaded the files send them to people who want those files.

BitTorrent is not just for piracy. It's a tool for sharing files. What purpose to use it depends on you.

# Terminology 
Seeder: The person who sends the file
Leecher: The person who receives the file
Peer: A seeder or leecher. BitTorrent users.
Tracker: Coordination servers which keeps track of who has which file and who wants which file

# Can I get in trouble for torrenting?
Everyone can see what you download including your internet service provider. iknowwhatyoudownload.com shows what files you and people who had the same IP as you downloaded

Service provider can send you a fine or a warning for downloading pirated content. Downloading illegal stuff like drug/bomb recipes will get you in trouble with authorities.

As long as you don't pirate anything you should be fine. But it is always recommended to use a VPN while torrenting. RED(((You should bind your VPN to your torrent client if you don't want people to see what you download))) See [How to bind your VPN] (different color than lgreen)

# Torrent Clients
Torrent client is the software which allows people to communicate using the BitTorrent protocol. Much like how a Web Browser allows you to communicate using the HTTP protocol

Desktop (Windows, MacOS, Linux, BSD...) - 💻 
iOS/iPadOS - 🍎 
Android - 🤖 

Popular desktop clients
- qBittorrent 💻 
- Deluge 💻 (complicated VPN binding)
- Transmission 💻 (no VPN binding support)
- LibreTorrent 🤖 (no VPN binding support)
- BiglyBT 🤖 💻 
- iTransmission 🍎 (requires sideloading or jailbreak)
- iTorrent 🍎 (requires sideloading or jailbreak)

All these client's are open source. Avoid using proprietary BitTorrent clients. [What is FOSS]

My choice is qBittorrent on desktop and BiglyBT on mobile. You can start your torrent client after downloading it. As I said it's not illegal to torrent, it's illegal to torrent illegal/copyrighted content.

# Recommended VPNs
I recommend Mullvad (paid) or RiseUp VPN (free) both of them are extremely trustworthy and won't snitch on you

# How to bind your VPN
After this process your torrent client will refuse to do any connections if your VPN is not connected or when your VPN gets disconnected. This process is different for every client and I'll only explaining some of them. Search on google if your client is not included

## qBittorrent [source](https://www.reddit.com/r/VPNTorrents/comments/ssy8vv/guide_bind_vpn_network_interface_to_torrent/)
- Go to Preferences, and then Advanced tab.
- Check for the differences on the "Network Interface" list when you connect/disconnect VPN (you may have to restart qBittorrent for the list to refresh).
- Select the one that shows up/disappears from the previous test.
- Restart qBittorrent.

## BiglyBT (Android) [source](https://www.reddit.com/r/VPNTorrents/comments/ppmnax/howto_safely_torrent_on_android_with_biglybt/)
- Connect to the VPN
- Go to BiglyBT Settings, Scroll down, go to "Full Settings > Mode"
- Under Mode, select "Advanced" to show all settings, go back
- Connection > Advanced Network Settings
- Look at the gray text under "Bind to local IP address or interface". These are the available network adapters/IPs. Only when your VPN is enabled will you see its additional interfaces. In my case it is "tun0". It should always be something like tun<number>
- RED(((YOU MUST DO THIS TOO))): Scroll down, enable "Check bind ... on startup" and "Enforce IP bindings ..." and "Pause downloads on loss on binding"  (this last one is mostly optional)

## Deluge
Binding on deluge is a little complicated but I'm gonna drop the official guide [here](https://dev.deluge-torrent.org/wiki/UserGuide/VPN)

# What are .torrent files
You can think of them as a link to file you want to download. A torrent file contains the data you'll need for the files to be downloaded, such as file names, sizes, and structure, as well as the servers you can contact to request a list of peers to connect to.

# Where do I find .torrent files
You can find "Torrent Trackers" on Google and search for files on these websites. But using a metasearch engine (a search engine which searches every website you add) will be a better experience. Check out our [Advanced Search/Metasearch Guide]