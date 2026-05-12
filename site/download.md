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
{{{ 
<div class="row"> 
 
    <div class="col-xs-8 col-xs-offset-2"> 
 
        <a class="btn btn-block download" href="https://files.pharo.org/pharo-launcher/windows"> 
            <i class="fa fa-windows"></i> Windows</a> 
        <br/> 
 
        <a class="btn btn-block download" href="https://files.pharo.org/pharo-launcher/mac-x64"> 
            <i class="fa fa-apple"></i> macOs x64</a> 
        <br/> 
 
        <a class="btn btn-block download" href="https://files.pharo.org/pharo-launcher/mac-arm64"> 
            <i class="fa fa-apple"></i> macOs arm64</a> 
        <br/> 
 
        <a class="btn btn-block download" href="https://files.pharo.org/pharo-launcher/linux64"> 
            <i class="fa fa-linux"></i> GNU/Linux</a> 
        <br/> 
    </div> 
</div> 
}}}
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
<img src="files/arch-logo.png"  width="50%" style="display: block; margin-left: auto; margin-right: auto;">
</div>

<div class="col-xs-2">
<img src="files/debian-logo.png"  width="50%" style="display: block; margin-left: auto; margin-right: auto;">
</div>

<div class="col-xs-2">
<img src="files/fedora-logo.png"  width="50%" style="display: block; margin-left: auto; margin-right: auto;">

</div>

<div class="col-xs-2">
<img src="files/opensuse-logo.png"  width="50%" style="display: block; margin-left: auto; margin-right: auto;">
</div>

<div class="col-xs-2">
<img src="files/raspbian-logo.png"  width="50%" style="display: block; margin-left: auto; margin-right: auto;">

</div>

<div class="col-xs-2">
<img src="files/ubuntu-logo.png"  width="50%" style="display: block; margin-left: auto; margin-right: auto;">

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
## Pharo standalone VM/Image 

You can download the Pharo VM and image as separate packages. Here for Pharo 12.

- [Pharo stable VM for Windows: 64 bits](https://files.pharo.org/get-files/120/pharo-vm-Windows-x86_64-stable.zip) | [Pharo stable VM for Windows: 32 bits](ttps://files.pharo.org/get-files/120/pharo-vm-Windows-X86-stable.zip)
- [Pharo stable VM for macOS: Intel ](https://files.pharo.org/get-files/120/pharo-vm-Darwin-x86_64-stable.zip) | [Pharo stable VM for macOS: Apple Silicon](https://files.pharo.org/get-files/120/pharo-vm-Darwin-arm64-stable.zip) 
- Pharo images need to be downloaded separately - [Pharo 120 64 bits image ](https://files.pharo.org/image/120/latest-64.zip) | [Pharo 120 64 bits image ](https://files.pharo.org/image/120/stable-32.zip)

</div>

</div>


<div class="row">

<div class="col-md-12">

## Older Versions


Downloads of previous versions are available on the [Pharo file server](https://files.pharo.org/).
</div>

</div>

</div>

