{
"title" : "Download - GNU/Linux installation - 64bits",
"layout" : "default",
"publishDate" : "2019-01-08"
}

# Download Pharo for GNU/Linux


### Zip file

**Version 6.1** for several common GNU/Linux configurations. The zip files contain everything necessary. Just download and run the executable. 
- [Pharo6.1-64-linux.zip](https://files.pharo.org/platform/Pharo6.1-64-linux.zip)


### Package for common distributions

Packages are available for some common linux distributions The binary names are picked to allow to install the 32bit and 64bit VM in parallel:
- pharo6-32	\(32bit version\) 
- pharo6-64	\(64bit version\) 
- pharo6-32-ui	\(32bit version with X11 dependencies\) 
- pharo6-64-ui	\(64bit version with X11 dependencies\) 



**CentOS 6.8:** 
The yum-utils package must be installed

```language=bash
$ yum-config-manager --add-repo http://download.opensuse.org/repositories/devel:/languages:/pharo:/stable/CentOS_6/devel:languages:pharo:stable.repo
```


# Install 32bit packages (with X11 dependency for *-ui or not) 

```
$ yum install pharo6-32-ui.i686 or pharo6-32.i386 
```


# Install 64bit packages 

```
$ yum install pharo6-64-ui.x86_64 pharo6-64.x86_64 
```


**CentOS 7 (only 64bit): 
The yum-utils package must be installed

```language=bash
$ cd /usr/lib64
$ ln -s libcurl.so.4 libcurl-gnutls.so.4
```


# Add the repo 

```
$ yum-config-manager --add-repo http://download.opensuse.org/repositories/devel:/languages:/pharo:/stable/CentOS_7/devel:languages:pharo:stable.repo
```


# Install 64bit packages

```
$ yum install pharo6-64-ui.x86_64 pharo6-64.x86_64 
```



**Debian 8:**

```language=bash
$ wget -O - http://download.opensuse.org/repositories/devel:/languages:/pharo:/stable/Debian_8.0/Release.key | apt-key add - 
$ echo "deb http://download.opensuse.org/repositories/devel:/languages:/pharo:/stable/Debian_8.0/ ./" > /etc/apt/sources.list.d/pharo.list 
```


# Update and install 

```
$ apt update 
$ apt install pharo6-32-ui pharo6-64-ui    (or pharo6-32 or pharo6-64) 
```


**Ubuntu 14.04 LTS **

```language=bash
$ wget -O - http://download.opensuse.org/repositories/devel:/languages:/pharo:/stable/xUbuntu_14.04/Release.key | apt-key add - 
$echo "deb http://download.opensuse.org/repositories/devel:/languages:/pharo:/stable/xUbuntu_14.04/ ./" > /etc/apt/sources.list.d/pharo.list 
```


# Update and install 

```
$ apt update 
$ apt install pharo6-32-ui pharo6-64-ui 
```


**Ubuntu 16.04 **

```language=
$ wget -O - http://download.opensuse.org/repositories/devel:/languages:/pharo:/stable/xUbuntu_16.04/Release.key | apt-key add - 
$ echo "deb http://download.opensuse.org/repositories/devel:/languages:/pharo:/stable/xUbuntu_16.04/ ./" > /etc/apt/sources.list.d/pharo.list 
```

# Update and install 

```
$ apt update 
$ apt install pharo6-32-ui pharo6-64-ui 
```


## ZeroConf


_Just because Pharo developers are addicted to our live, dynamic IDE does not mean that we do not value automatic scripts and love the command line! Zeroconf scripts automatically download everything you need to get started. It will recognize your platform and load the appropriate VM version._ - Adapted from the [Deep Into Pharo](https://deepintopharo.com/) book.

```language=Bash
curl -L https://get.pharo.org/64/ | bash

wget -O- https://get.pharo.org/64 | bash
```


Have a look at the [Zeroconf Website](https://get.pharo.org/64) for more information.

@others
### Build from Source 

You can always build the VM [from the sources](https://files.pharo.org/vm/src/vm-unix-sources/blessed/). Feel free to ask questions on the [users mailing list](http://lists.pharo.org/mailman/listinfo/pharo-users_lists.pharo.org).