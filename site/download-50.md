{
"title" : "Download (50)",
"layout" : "default",
"publishDate" : "2016-11-09"
}

<div class="teaser">


# Download Pharo


**Version 5.0** for OS X, GNU/Linux, and Windows. The zip files contain all necessary files. Just download and run the executable.

<a class="btn download" href="http://files.pharo.org/platform/Pharo5.0-mac.zip"><i class="fa fa-apple"></i> Mac OSX
</a>

<a class="btn download" href="http://files.pharo.org/platform/Pharo5.0-win.zip"><i class="fa fa-windows"></i> Windows
</a>

<a class="btn download" href="http://pharo.org/gnu-linux-installation-50"><i class="fa fa-linux"></i> GNU/Linux
</a>

</div>


## Prefer the Command Line?


_Just because Pharo developers are addicted to our live, dynamic IDE does not mean that we do not value automatic scripts and love the command line! Zeroconf scripts automatically download everything you need to get started. It will recognize your platform and load the appropriate VM version._ - Adapted from the [Deep Into Pharo](http://deepintopharo.com/) book.

```language=Bash
curl get.pharo.org/50+vm | bash

# or if curl is not available:

wget -O- get.pharo.org/50+vm | bash
```


Have a look at the [Zeroconf Website](http://get.pharo.org/) for more information.

@custom
## Custom Downloads


To run Pharo you need platform independent image, changes & sources files, and a platform specific VM.

When downloads are completed, uncompress all files and put them into the same directory \(this directory should then contain a .image, .changes, and a .sources file\). Then start the VM.

- [Pharo 5.0 image & changes](http://files.pharo.org/get-files/50/pharo.zip)
- [Pharo 5.0 sources](http://files.pharo.org/get-files/50/sources.zip) \(you will need it if you download image and VM separately\)
- [Mac OSX virtual machine](http://files.pharo.org/get-files/50/pharo-mac-stable.zip)
- [Windows virtual machine](http://files.pharo.org/get-files/50/pharo-win-stable.zip)
- GNU/Linux virtual machine - Besides the [generic binary](http://files.pharo.org/get-files/50/pharo-linux-stable.zip), there are pre-built VMs for [systems with libc < 2.15](http://files.pharo.org/vm/pharo-spur32/linux/old-libc/Pharo-VM-linux-oldLibC.zip) \(e.g. Debian 7 "wheezy"\), and [CentOS](http://files.pharo.org/vm/pharo-spur32/linux/centos/latest.zip). NB: If you're on 64-bit GNU/Linux, see [our instructions to prepare your system](http://pharo.org/gnu-linux-installation#64-bit-System-Setup)




### Minimal image

The minimal image is a reduced version of Pharo 5.0: You have the most basic environment and you can interact with it via command line. _WARNING: For hackers only!_
- [Pharo 5.0 minimal image](http://files.pharo.org/get-files/50/pharo-minimal.zip)

 
<!--
@development
!! Development version: Pharo6
If you want to contribute you will need the latest development version:
- Download latest *Pharo6 image>http://files.pharo.org/get-files/60/pharo.zip*
- Download latest Pharo6 Virtual Machine: *Linux>http://files.pharo.org/get-files/60/pharo-linux-stable.zip* | *Mac>http://files.pharo.org/get-files/60/pharo-mac-stable.zip* | *Windows>http://files.pharo.org/get-files/60/pharo-win-stable.zip*
- Download *Pharo 6.0 sources>http://files.pharo.org/get-files/60/sources.zip*
- CI Server: *https://ci.inria.fr/pharo/*
-->


## Older Versions


Downloads of previous versions are available on the [Pharo file server](http://files.pharo.org/).

<a href="https://flattr.com/submit/auto?user_id=Pharo&url=http%3A%2F%2Fpharo.org" target="_blank"><img src="//button.flattr.com/flattr-badge-large.png" alt="Flattr this" title="Flattr this" border="0"></a>
