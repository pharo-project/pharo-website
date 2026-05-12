{
"title": "Pharo 6.1 released",
"layout": "blogpost",
"publishDate": "2017-07-24"
}

We are releasing Pharo 6.1. 
Usually, between each major version we just apply bugfixes changing the build number and not announcing new versions but this time is different since the fixes applied required a new VM. 
The principal reason for the new version is to update Iceberg support, bringing it to macOS 64bits version. 

So, now Pharo 6.1 comes with Iceberg 0.5.5, which includes: 

- running on macOS 64bits
- adds cherry pick 
- adds major improvements on performance for big repositories
- adds pull request review plugin
- repositories browser: group branches by remote
- adds bitbucket and gitlab to recognised providers on metacello integration
- uses libgit v0.25.1 as backend
- several bugfixes. [Check here for a complete list](http://files.pharo.org/media/ChangeLog61.txt)


Other important change: 

- linux vm by default is now vm threaded heartbeat. 


To download 6.1 version, you can go to [http://pharo.org/download](http://pharo.org/download) page, or with zeroconf, executing: 

```
wget -O- get.pharo.org | bash
```


Enjoy!
