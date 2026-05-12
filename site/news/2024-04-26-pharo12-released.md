{
"title": "Pharo 12 Released!",
"layout": "blogpost",
"publishDate": "2024-04-26"
}

Dear Pharo users and dynamic language lovers: 

We have released [Pharo](https://pharo.org/) version 12!

## What is Pharo?

Pharo is a pure object-oriented programming language and a powerful environment focused on simplicity and immediate feedback.

![Screenshot of Pharo 12](/news/Pharo12.png)

- Simple & powerful language: No constructors, no types declaration, no interfaces, no primitive types. Yet a powerful and elegant language with a full syntax fitting in one postcard! Pharo is objects and messages all the way down.

- Live, immersive environment: Immediate feedback at any moment of your development: Developing, testing, debugging. Even in production environments, you will never be stuck in compiling and deploying steps again!

- Amazing debugging experience: Pharo environment includes a debugger unlike anything you've seen before. It allows you to step through code, restart the execution of methods, create methods on the fly, and much more!

- Pharo is yours: Pharo is made by an incredible community, with more than 100 contributors for the last revision of the platform and hundreds of people constantly contributing with frameworks and libraries.

- Fully open-source: Pharo full stack is released under [MIT](https://opensource.org/licenses/MIT) License and available on [GitHub](https://github.com/pharo-project/pharo)
... more on the [Pharo Features page](http://www.pharo.org/features).

In this iteration of Pharo, we continue working on our objectives of improvement, clean-up and modularization.
Also, we included a number of usability and speed improvements. 
A complete list of changes and improvements is available in our [Changelog](https://github.com/pharo-project/pharo-changelogs/blob/master/Pharo120ChangeLogs.md)

Some highlights of this amazing version:

## Highlights

### New breakpoint system

The debug point system is a breakpoint model that supersedes the previous implementation of breakpoints and watchpoints. They are configurable, composable, and extensible. The traditional breakpoints remain available, including conditional breakpoints, one-time breakpoints, and object-centric breakpoints. Additionally, there are new types of breakpoints, such as chained-breakpoints, which condition the activation of certain breakpoints on the triggering of others (e.g., breakpoint B only activates if breakpoint A is hit first). Debug points also feature a dedicated browser and integration options.

![Debug Point Browser](/news/Pharo12DebugPoints.png)

### Tools

- Scalable fluid class syntax is now the default one
- Preparing the introduction of the Bloc graphic system by migrating more tools to Spec2 widgets
- Spec2 UI framework enhancements to support GTK 4
- Leaner version of the Metacello package manager
- More robust and strict mode for FFI

### System 

- New architecture for refactorings and domain specific transformations
- Code loading speed improvement
- Fast browsing via fully optimized package tags
- Optimized memory usage for method protocols
- Compiler simplifications and improvements
   
### Virtual machine

- Massive image support with permanent space
- String/ByteArray comparison speed up

## Development Effort

This new version is the result of 1895 Pull Requests integrated just in the Pharo repository. 
We have closed 865 issues and received contributions from more than 70 different contributors.
We have also a lot of work in the separate projects that are included in each Pharo release:

- [http://github.com/pharo-spec/NewTools](http://github.com/pharo-spec/NewTools)
- [http://github.com/pharo-spec/NewTools-DocumentBrowser](http://github.com/pharo-spec/NewTools-DocumentBrowser)
- [http://github.com/pharo-spec/Spec](http://github.com/pharo-spec/Spec)
- [http://github.com/pharo-vcs/Iceberg](http://github.com/pharo-vcs/Iceberg)
- [https://github.com/pharo-graphics/Roassal](https://github.com/pharo-graphics/Roassal)
- [http://github.com/pillar-markup/Microdown](http://github.com/pillar-markup/Microdown)
- [http://github.com/pillar-markup/BeautifulComments](http://github.com/pillar-markup/BeautifulComments)
- [http://github.com/pharo-project/pharo-vm](http://github.com/pharo-project/pharo-vm)

## Contributors
We always say Pharo is yours. It is yours because we made it for you, but most importantly because it is made by the invaluable contributions of our great community (yourself).  
A large community of people from all around the world contributed to Pharo 12.0 by making pull requests, reporting bugs, participating in discussion threads, providing feedback, and a lot of helpful tasks in all our community channels.  
Thank you all for your contributions.


The Pharo Team

Discover Pharo: [https://pharo.org/features](https://pharo.org/features)

Try Pharo: [http://pharo.org/download](http://pharo.org/download)

Learn Pharo: [http://pharo.org/documentation](http://pharo.org/documentation)
