{
"title" : "Download",
"layout" : "default",
"publishDate": "2024-04-11"
}


# Download Pharo

<div class="container-fluid">

<div class="row">

<div class="col-md-12">

## Download **Pharo Launcher**

The fastest way to get a working Pharo environment: image \(an object space with Pharo Core libraries\) + virtual machine is to use Pharo Launcher. Pharo Launcher is a tool allowing you to easily download Pharo core images \(Pharo stable version, Pharo development version, old Pharo versions, Pharo Mooc\) and automatically get the appropriate virtual machine to run these images.

</div>

</div>

<div class="row">

<div class="col-md-6">

    <img src="https://github.com/pharo-project/pharo-launcher/raw/2.0/docs/images/pharo-launcher.png" alt="pharo-launcher" width="100%" style="display: block; margin-left: auto; margin-right: auto;">

</div>

<div class="col-md-6">

<div class="row">

<div class="col-xs-8 col-xs-offset-2">

<a class="btn btn-block download" href="https://files.pharo.org/pharo-launcher/windows"><i class="fa fa-windows"></i> Windows
</a><br/>

<a class="btn btn-block download" href="https://files.pharo.org/pharo-launcher/mac-x64"><i class="fa fa-apple"></i> MacOs x64
</a><br/>

<a class="btn btn-block download" href="https://files.pharo.org/pharo-launcher/mac-arm64"><i class="fa fa-apple"></i> MacOs arm64
</a><br/>

<a class="btn btn-block download" href="https://files.pharo.org/pharo-launcher/linux64"><i class="fa fa-linux"></i> GNU/Linux
</a><br/>

</div>

</div>

</div>

</div>


<div class="row">

<div class="col-md-12">

### Installation

Installation instructions are available within the documentation: [https://pharo-project.github.io/pharo-launcher/installation/](https://pharo-project.github.io/pharo-launcher/installation/)
</div>

</div>


<div class="row">

<div class="col-md-12">

## GNU/Linux Packages

While there is a [zeroconf](https://get.pharo.org) installation that works for many Linux distributions, due the richness of its ecosystem, not all of them are covered for it. Pharo uses [Open Build Service](https://build.opensuse.org) to provide packages for many distributions:

<div class="row text-center">

<div class="col-xs-2">
![](https://software.opensuse.org/assets/download/arch-d33a62923121d629c7f951974e8bcf90e9f906d31c1af8c4d49593f2dd04a51b.png)
</div>

<div class="col-xs-2">
![](https://software.opensuse.org/assets/download/debian-96bd00e831b0e517bcf293c6bb2757ed5c6c7f1d1e16ba258b4f966aa4427ea5.png)
</div>

<div class="col-xs-2">
![](https://software.opensuse.org/assets/download/fedora-87c4d18cf84fa9a9d932beef715019cc3a4a944faebb40f4da0414d28f62d9a1.png)
</div>

<div class="col-xs-2">
![](https://software.opensuse.org/assets/download/opensuse-7d99f0ac15667145b8611ca67f8a551f5f010c98cb2e89cc38bdefa9e6ee3321.png)
</div>

<div class="col-xs-2">
![](https://software.opensuse.org/assets/download/raspbian-975d66c4773377e550011409391bb441fe614aba38fa5b9aa813cf74bb3b8f4e.png)
</div>

<div class="col-xs-2">
![](https://software.opensuse.org/assets/download/ubuntu-482a9f0e811541ab84d51428fade325ab4a34ddf326c35091c8d81e86f96d61d.png)
</div>

</div>

</br>

- [Install Pharo stable VM (Full)](https://software.opensuse.org//download.html?project=devel:languages:pharo:stable&package=pharo-ui). This package will install pharo vm, the pharo-ui script and all its dependencies.
- [Install Pharo stable VM](https://software.opensuse.org/download.html?project=devel:languages:pharo:stable&package=pharo). This package will install the pharo vm.
- Pharo images need to be downloaded separately [here](https://files.pharo.org/get-files/110/pharo64.zip).

</div>

</div>


<div class="row">

<div class="col-md-12">

## Command Line


Zeroconf scripts automatically download everything you need to get started. It will recognize your platform and load the appropriate VM version. This is very useful when doing automated builds with a continuous integration server.

```language=Bash
# 64bit version
curl -L https://get.pharo.org | bash
# or if curl is not available:
wget -O- https://get.pharo.org | bash
```

Have a look at the [Zeroconf Website](https://get.pharo.org/) for more information.

</div>

</div>


<div class="row">

<div class="col-md-12">

@standalone
## Pharo standalone

You can download the Pharo VM and image as separated packages.

<ul>
<li><i class="fa fa-windows"></I> Pharo stable VM for Windows: <a href="https://files.pharo.org/get-files/120/pharo-vm-Windows-x86_64-stable.zip">64bit (default)</a> | <a href="https://files.pharo.org/get-files/120/pharo-vm-Windows-X86-stable.zip">32bit</a></li>
<li><i class="fa fa-apple"></I> Pharo stable VM for macOS: <a href="https://files.pharo.org/get-files/120/pharo-vm-Darwin-x86_64-stable.zip">Intel 64bit</a> | <a href="https://files.pharo.org/get-files/120/pharo-vm-Darwin-arm64-stable.zip">Apple Silicon (default)</a></li>
<li><i class="fa fa-linux"></I> Pharo stable VM for Linux: <a href="https://files.pharo.org/get-files/120/pharo-vm-Linux-x86_64-stable.zip">64bit (default)</a> | <a href="https://files.pharo.org/get-files/100/pharo-linux-stable.zip">32bit</a>  (WARNING: This linux builds were made for Debian based distributions, in any other case, we recommend to use the OBS based package).</li>
<li>Pharo image: <a href="https://files.pharo.org/image/120/latest-64.zip">64bit (default)</a> | <a href="https://files.pharo.org/image/100/stable-32.zip">32bit</a></li>
</ul>

</div>

</div>


<div class="row">

<div class="col-md-12">

## Older Versions


Downloads of previous versions are available on the [Pharo file server](https://files.pharo.org/).
</div>

</div>

</div>

