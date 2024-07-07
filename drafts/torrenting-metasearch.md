# Prerequisites
This guide is an addition on top of "Torrenting - Basics". You need to read that first before you can use Jackett.

# What is metasearch
Metasearch is the action of searching multiple websites at the same time. We will be using Jackett for this tutorial. Metasearch engines are not usually publicly available like Google or Bing so in this tutorial we will be hosting one on our own computer. Jackett is the metasearch engine we will be using

# Installing Jackett (Windows)
1. Go to [Jackett's Github Page](https://github.com/Jackett/Jackett/releases/)
3. Click on "Jackett.Binaries.Windows.zip
4. Extract the zip file and run the file called "jackett_launcher"
5. Right click on the jackett icon in the "systray" and click "Open Web UI". OR you can click [here](http://127.0.0.1:9117/) to open it
![img]

# Installing Jackett (Linux)
Arch Linux users, Jackett is available on AUR. You can just run "yay -S jackett-bin" to install. You need to run "sudo systemctl start jackett" every time you need jackett or you can set it to start on boot with "sudo systemctl enable jackett". Go to 127.0.0.1:9117 with a browser to access the WebUI

For other Linux users:
1. Go to [Jackett's Github Page](https://github.com/Jackett/Jackett/releases/)
2. You may check your architecture with the "uname -m" command but on most computers, it's probably AMDx64. x86_64 = AMDx64, aarch64 = ARM64, armv<number> = ARM32, 
3. Download "Jackett.Binaries.Linux<your architecture>.tar.gz"  
4. Run "jackett_launcher.sh"
Try the "Musl" one if it doesn't work

# Installing Jackett (MacOS)
You need macOS 12.0+ (Monterey) or greater
1. Go to [Jackett's Github Page](https://github.com/Jackett/Jackett/releases/)
2. If your mac has a ARM CPU (M1, M2...) download Jackett.Binaries.macOSARM64.tar.gz, if it has an Intel CPU download Jackett.Binaries.macOS.tar.gz. You can find out this by clicking the apple logo on top left corner and then clicking "About this Mac"
3. Extract the downloaded file.
4. Open the extracted folder and double-click on "jackett".
5. Jackett is now running. Go to 127.0.0.1:9117 with safari. Or you can click [here](http://127.0.0.1:9117/)
TODO

# How to add "Indexers"
Indexers are websites with collections of torrents. You can add indexers you like or you can add all of them.

Click on the "Add indexer" button in Jackett UI to open the indexer adding menu. This is a list of all indexers Jackett supports. Public ones are the ones you should be using for now because "Private Indexers" only allow experienced torrenters who contribute to the community by seeding (sending files to others). Don't worry though, public indexers are good enough for most people.

Anyways, here, you can tick the indexers you wanna add and then click the "Add selected" button way on the bottom.

# Add all public indexers
This is not recommended but it's also the way I use Jackett. It's not advised to search all indexers if you are looking for an executable (computer app). But it's perfectly safe if you are gonna download a video, image or text

Here's how you quickly add all public indexers:
1. Click on the "Add indexer" button
2. Press F12 on your keyboard. A bunch of code will appear on the side.
3. Find the "Console" tab in there
![img]![img]
4. Paste the code below in the console and press enter

var chs = document.querySelectorAll('.checkboxColumn input[type="checkbox"]');
for (let i = 0; i < chs.length; i++) {chs[i].checked=true;}

# Downloading apps blindly can be dangerous
Don't run .exe files disguised as movies. If you are downloading an app, only download apps from trustworthy "distributors". Look for online posts about a distributor before downloading their torrents

For example a torrent could be named Fun.Game.3.MULTi13-ElAesistril. In this case you should search "Is ElAesistril trustworthy?" before downloading and running it. You should seek real people's comments which is mostly on reddit and other forums
