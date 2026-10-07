# Pharo 14 Released!

Dear Pharo users and dynamic language lovers:

We have released [Pharo](https://pharo.org/) version 14!

## What is Pharo?

Pharo is a pure object-oriented programming language and a powerful environment focused on simplicity and immediate feedback.

![Screenshot of Pharo 14](/news/Pharo14.png)

- Simple & powerful language: No constructors, no types declaration, no interfaces, no primitive types. Yet a powerful and elegant language with a full syntax fitting in one postcard! Pharo is objects and messages all the way down.
- Live, immersive environment: Immediate feedback at any moment of your development: Developing, testing, debugging. Even in production environments, you will never be stuck in compiling and deploying steps again!
- Amazing debugging experience: Pharo environment includes a debugger unlike anything you've seen before. It allows you to step through code, restart the execution of methods, create methods on the fly, and much more!
- Pharo is yours: Pharo is made by an incredible community, with more than [X] contributors for the last revision of the platform and hundreds of people constantly contributing with frameworks and libraries.
- Fully open-source: Pharo full stack is released under [MIT](https://opensource.org/licenses/MIT) License and available on [GitHub](https://github.com/pharo-project/pharo)
... more on the [Pharo Features page](http://www.pharo.org/features).

In this iteration of Pharo, our efforts have concentrated on three main areas:

- **Modernizing the development tools.** We introduced Mission Control and Pulse (the replacement for Spotter), reworked the Method Browser and rewrote the Settings Browser, and consolidated Epicea and ProfStef into NewTools. This continues our ongoing migration of the development tools to the Spec-based tooling stack.
- **Rebuilding the refactoring and command infrastructure.** Refactoring commands were migrated to a driver-based architecture behind a unified command registry, and we kept expanding Pharo's command-line capabilities (command-line testing, a command-line debugger, and Sindarin script tooling).
- **Modernizing the virtual machine.** We unified frames and stack management, added RISC-V JIT support, extended memory management (direct old-space allocation and GC improvements), advanced Slang/C compilation, and modernized the cross-platform build infrastructure.

Worth noting: starting with this release, we have moved our release schedule from spring (March–May) to fall (September–November). Pharo 14 is the first version released under the new schedule.

Some highlights of this amazing version:

## Highlights

### Tools

- Introduction of Mission Control
- New/reworked Method Browser
- Settings Browser rewrite and switch to default
- Epicea migration into NewTools
- ProfStef migration into NewTools
- Introduction of Pulse (Spotter replacement)
- TestRunner integration and command-line testing
- Calypso fixes
- Cavrois / window profile work
- File Browser, Finder and Transcript improvements

### System

- Refactoring command migration and registry
- Scoped extensions and selector semantics
- Clean blocks and debugger/evaluation behavior
- ClassBuilder, trait and superclass correctness
- Compiler API split and method installation
- UnifiedFFI value holders, `FFIMethod`, callbacks and bootstrap resets
- Command-line debugger
- Debugger / client-model cleanup
- Package/baseline modularization and bootstrap dependency cleanup
- Morphic / UIManager dependency reduction
- FastTable, text, graphics, Zinc and Zodiac fixes
- Sindarin script tooling
- Code editor / code presenter work
- List, tree and filtering behavior
- Dialog, window and modal behavior
- Action/command enhancements and cleanup
- Morphic backend and layout fixes

### Virtual machine

- Frame unification and stack management improvements, delivering substantial interpreter and execution engine cleanups
- RISC-V JIT support, expanding platform coverage and future-proofing VM development
- New memory management capabilities, including direct old-space allocation and numerous GC and allocation improvements
- Extensive compiler and Slang/C translation work, with many correctness fixes, new tests, and improved inspection tools
- Platform and build modernization, including SDL updates, improved CI, cross-build support, and updated third-party dependencies
- Large-scale cleanup and refactoring efforts across the VM, interpreter, Cogit, PICs, and infrastructure

## Development Effort

This new version is the result of 978 Pull Requests integrated just in the Pharo repository.
We have closed 616 issues since Pharo 13.
The project now counts 432 forks and 1,494 stars on GitHub.
We also have a lot of work in the separate projects that are included in each Pharo release:

- [http://github.com/pharo-spec/NewTools](https://github.com/pharo-spec/NewTools)
- [http://github.com/pharo-spec/Spec](https://github.com/pharo-spec/Spec)
- [http://github.com/pharo-vcs/Iceberg](https://github.com/pharo-vcs/Iceberg)
- [https://github.com/pharo-graphics/Roassal](https://github.com/pharo-graphics/Roassal)
- [http://github.com/pillar-markup/Microdown](http://github.com/pillar-markup/Microdown)
- [http://github.com/pillar-markup/BeautifulComments](http://github.com/pillar-markup/BeautifulComments)
- [http://github.com/pharo-project/pharo-vm](https://github.com/pharo-project/pharo-vm)

## Contributors

We always say Pharo is yours. It is yours because we made it for you, but most importantly, because it is made by the invaluable contributions of our great community (yourself).
A large community of people from all around the world contributed to Pharo 14 by making pull requests, reporting bugs, participating in discussion threads, providing feedback, and a lot of helpful tasks in all our community channels.
Thank you all for your contributions.

The Pharo Team

- Discover Pharo: [https://pharo.org/features](https://pharo.org/features)
- Try Pharo: [http://pharo.org/download](https://pharo.org/download)
- Learn Pharo: [http://pharo.org/documentation](https://pharo.org/documentation)
[Date]
