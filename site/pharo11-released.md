{
"title": "Pharo 11 Released!",
"layout": "blogpost",
"publishDate": "2023-05-10"
}

Dear Pharo users and dynamic language lovers: 

We have released [Pharo](https://pharo.org/) version 11!

## What is Pharo?

Pharo is a pure object-oriented programming language and a powerful environment focused on simplicity and immediate feedback.

![Screenshot of Pharo 11](https://files.pharo.org/web-images/news/Pharo11.png)

- Simple & powerful language: No constructors, no types declaration, no interfaces, no primitive types. Yet a powerful and elegant language with a full syntax fitting in one postcard! Pharo is objects and messages all the way down.

- Live, immersive environment: Immediate feedback at any moment of your development: Developing, testing, debugging. Even in production environments, you will never be stuck in compiling and deploying steps again!

- Amazing debugging experience: Pharo environment includes a debugger unlike anything you've seen before. It allows you to step through code, restart the execution of methods, create methods on the fly, and much more!

- Pharo is yours: Pharo is made by an incredible community, with more than 100 contributors for the last revision of the platform and hundreds of people constantly contributing with frameworks and libraries.

- Fully open-source: Pharo full stack is released under [MIT](https://opensource.org/licenses/MIT) License and available on [GitHub](https://github.com/pharo-project/pharo)
... more on the [Pharo Features page](http://www.pharo.org/features).

In this iteration of Pharo, we continue working on our objectives of improvement, clean-up and modularization.
Also, we included a number of usability and speed improvements. 
A complete list of changes and improvements is available in our [Changelog](https://github.com/pharo-project/pharo-changelogs/blob/master/Pharo110ChangeLogs.md)

Some highlights of this amazing version:

## Highlights

### Tools
- Iceberg (the git client/VCS control tool) has received a lot of tweaks and fixes to work better with GitHub and other Git services.
- Our debugger now incorporates lots of tweaks and notably the capability of adding bindings in the context interaction model.
- The is a new implementation of rewrite tools and improved refactoring support. 
- There is a new tool: The Document Browser, which presents Microdown (markdown compatible) documents placed on the web or locally. 
- New Tools presented in Calypso (the System Browser) and additional extended Inspectors.
- All versions of NewTools, Spec, Roassal and Microdown have been updated with their respective bug fixes and improvements.

### System 

- Extended Full Blocks and Constant Clock closures support.
- Additional Inlining and optimizations 
- Bug Fixes and Clean up.
- Ephemeron Finalization support.
   
### Virtual machine
- Ephemerons Production Ready.
- Initial support for Single-Instruction Multiple-Data (SIMD).
- Third-Party Dependency Update (Newer versions, Graphic Libraries using Hardware Acceleration).
- Clean Ups: Remove lots of old code, notably old experiments, and dead code. 


## Development Effort

This new version is the result of 1412 Pull Requests integrated just in the Pharo repository. 
We have closed 972 issues and received contributions from more than 70 different contributors.
We have also a lot of work in the separate projects that are included in each Pharo release:

- [http://github.com/pharo-spec/NewTools](http://github.com/pharo-spec/NewTools)
- [http://github.com/pharo-spec/NewTools-DocumentBrowser](http://github.com/pharo-spec/NewTools-DocumentBrowser)
- [http://github.com/pharo-spec/Spec](http://github.com/pharo-spec/Spec)
- [http://github.com/pharo-vcs/Iceberg](http://github.com/pharo-vcs/Iceberg)
- [http://github.com/ObjectProfile/Roassal3](http://github.com/ObjectProfile/Roassal3)
- [http://github.com/pillar-markup/Microdown](http://github.com/pillar-markup/Microdown)
- [http://github.com/pillar-markup/BeautifulComments](http://github.com/pillar-markup/BeautifulComments)
- [http://github.com/pharo-project/pharo-vm](http://github.com/pharo-project/pharo-vm)

## Contributors
We always say Pharo is yours. It is yours because we made it for you, but most importantly because it is made by the invaluable contributions of our great community (yourself).  
A large community of people from all around the world contributed to Pharo 11.0 by making pull requests, reporting bugs, participating in discussion threads, providing feedback, and a lot of helpful tasks in all our community channels.  
Thank you all for your contributions.


The Pharo Team

Discover Pharo: [https://pharo.org/features](https://pharo.org/features)

Try Pharo: [http://pharo.org/download](http://pharo.org/download)

Learn Pharo: [http://pharo.org/documentation](http://pharo.org/documentation)
