{
"title" : "Download - GNU/Linux installation (50)",
"layout" : "default",
"publishDate" : "2016-04-28"
}

<div class="teaser">

# Download Pharo for GNU/Linux


@standard-downloads
**Version 5.0** for several common GNU/Linux configurations. The zip files contain everything necessary. Just download and run the executable. For more download options, see the sections below.

<a class="btn download" href="http://files.pharo.org/platform/Pharo5.0-linux.zip"><i class="fa fa-linux"></i> Default GNU/Linux
</a>

<a class="btn download" href="http://files.pharo.org/platform/Pharo5.0-linux-oldLibC.zip"><i class="fa fa-linux"></i> GNU/Linux w. libc < 2.15
</a>

<a class="btn download" href="http://files.pharo.org/platform/Pharo5.0-centos.zip"><i class="fa fa-linux"></i> CentOS
</a>


</div>


@64-bit-System-Setup
## 64-bit System Setup

A 64-bit binary is on our horizon, but currently Pharo is 32-bit, requiring a bit of extra setup on 64-bit systems. Once your system is set up, you should be all set with the [standard downloads above](#standard-downloads). While we obviously can't provide instructions for every version of every distribution, below we list some of the most common cases. If you encounter a problem not addressed below, ask for help on our very friendly [user mailing list](http://lists.pharo.org/mailman/listinfo/pharo-users_lists.pharo.org)

### Ubuntu 14.04 and Later

Since the ia32-libs package is no longer loadable on these systems, you can follow the instructions for [Debian 8](#debian8).

### Other

@debian6
The following is known to work in **Debian** \(most recently tested in **7.8 wheezy**\) and **older Ubuntu \(e.g. 12.04\)** systems.
```language=bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install ia32-libs
```


@debian8
The installation in **Debian 8 Jessie 64bits** requires some operations.
```language=bash
 sudo dpkg --add-architecture i386 
 sudo apt-get update 
 sudo apt-get install libx11-6:i386 
 sudo apt-get install libgl1-mesa-glx:i386 
 sudo apt-get install libfontconfig1:i386 
 sudo apt-get install libssl1.0.0:i386 
```


## Distribution packages \(More advanced\)

While the easiest way to get started is to download the [standard downloads at the top of this page](#standard-downloads), there are also various options via GNU/Linux Package Managers. For each option, be aware that what you are downloading is different than the [standard downloads](#standard-downloads) - some install only the Pharo VM, others install  Pharo Launcher \(our experimental new GUI Dashboard\)

<!--

### Ubuntu \(ppa\)

Ubuntu users can use the dedicated ppa to install Pharo in various ways:

@ubuntu-ppa-headless-vm
#### Install the headless Pharo VM only

```language=bash
sudo add-apt-repository ppa:pharo/stable
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install pharo-vm-core
```


@ubuntu-ppa-launcher
#### Install Pharo Launcher, our experimental new GUI Dashboard

```language=bash
sudo add-apt-repository ppa:pharo/stable
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install pharo-launcher
```


- If you don't have the add-apt-repository command, [google](https://www.google.com/search?q=add-apt-repository+not+found) is your best bet as getting it varies by distribution version
- For reference, the [ppa page on launchpad.net](https://launchpad.net/~pharo/+archive/ubuntu/stable)

-->


### CentOS

Virtual machine can be found here: 
[Pharo 5.0 CentOS](http://files.pharo.org/get-files/50/pharo-centos-stable.zip)

### ArchLinux

#### Install the Pharo VM only

```language=bash
yaourt pharo-vm-latest
# which is then used like this:
pharo /path/to/your/image
```


#### Install Pharo Launcher, our experimental new GUI Dashboard

```language=bash
yaourt pharo-launcher
# which is then launched via:
pharo-launcher
```


See the [VM](https://aur.archlinux.org/packages/pharo-vm-latest/) or [Launcher](https://aur.archlinux.org/packages/pharo-launcher/) packages or this [mailing list post](http://lists.pharo.org/pipermail/pharo-dev_lists.pharo.org/2014-March/093561.html) for more info.

### Nix

The [Nix package manager](http://nixos.org/nix/) can be installed on Linux and other Unix systems. The [Pharo VM](https://github.com/NixOS/nixpkgs/blob/master/pkgs/development/pharo/vm/default.nix) and [Launcher](https://github.com/NixOS/nixpkgs/blob/master/pkgs/development/pharo/launcher/default.nix) are part of the [Nix Packages collection](http://nixos.org/nixpkgs/).

@others
### Others 

You can always build the VM [from the sources](http://files.pharo.org/vm/src/vm-unix-sources/blessed/). Feel free to ask questions on the [users mailing list](http://lists.pharo.org/mailman/listinfo/pharo-users_lists.pharo.org).