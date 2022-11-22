# Pharo Web Site

This is the Pharo web site you can find at: http://pharo.org
 
[![publish](https://github.com/pharo-project/pharo-site/actions/workflows/publish.yaml/badge.svg)](https://github.com/pharo-project/pharo-site/actions/workflows/publish.yaml)


Improving the Pharo site is now much simpler:
- do Pull request here  
- ask the community for review (e.g. send a Mail to the mailinglists, discuss on Discord)
- change will be merged after review
- update appears on https://www.pharo.org

### For Success Stories
You do a PR there, with a new file in "success" subdirectory. The name of this file does not matter, but it has to have the "md" extension.
that file has to have this header:

```
title: The title you want
layout: blogpost
publishDate:  "YYYY-MM-DD"
```

`title:` and `publishDate:` determine how they are listed and sort.
Take a look at https://raw.githubusercontent.com/pharo-project/pharo-site/main/site/success/321via.md as an example (also on how to add images).
