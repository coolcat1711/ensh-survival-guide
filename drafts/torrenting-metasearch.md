# What is metasearch
Metasearch is the action of searching multiple websites at the same time. We will be using Jackett for this tutorial. Metasearch engines are not usually publicly available like Google or Bing so in this tutorial we will be hosting one on our own computer. Jackett is the metasearch engine we will be using

# Installing Jackett (Windows)
1. Go to [Jackett's Github Page](https://github.com/Jackett/Jackett/releases/)
3. Click on "Jackett.Binaries.Windows.zip
4. Extract the zip file and run the file called "jackett_launcher"
5. Right click on the jackett icon in the "systray" and click "Open Web UI". Or you can click [here](http://127.0.0.1:9117/)
![img]

# Installing Jackett (Linux)
Arch Linux users, Jackett is available on AUR. You can just run "yay -S jackett-bin" to install. You need to run "sudo systemctl start jackett" every time you need jackett or you can set it to start on boot with "sudo systemctl enable jackett". Go to 127.0.0.1:9117 with a browser to access the WebUI

For other Linux users:
1. Go to [Jackett's Github Page](https://github.com/Jackett/Jackett/releases/)
3. You may check your architecture with the "uname -m" command but on most computers, it's probably AMDx64. x86_64 = AMDx64, aarch64 = ARM64, armv<number> = ARM32, 
4. Click on "Jackett.Binaries.Linux<your architecture>.tar.gz"
TODO
Try the "Musl" one if it doesn't work

# Installing Jackett (MacOS)
You need macOS 12.0+ (Monterey) or greater
. 1. Go to [Jackett's Github Page](https://github.com/Jackett/Jackett/releases/)
. Open the terminal app (under Utilities)
. Type "uname -m" (without "")
. If it says "arm64" click on Jackett.Binaries.macOSARM64.tar.gz, if it says "x86_64" click on Jackett.Binaries.macOS.tar.gz
. Type "cd Downloads" (without "", case sensitive) 