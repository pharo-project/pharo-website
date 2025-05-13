{
"title" : "What is to deliver Pharo?",
"layout" : "default",
"publishDate" : "2021-07-12"
}

# What is to deliver Pharo?

You probably know what Pharo is, but the interesting next questions are:
- what are the components that compose Pharo?
- what does it mean to deliver Pharo?
- what are the elements that should be maintained to make sure that Pharo is running?  

We present a digestible list of elements to answer these questions. 
It is in no way exhaustive. 

<div class="col-md-9 col-xs-12">

## Language 
- Compiler
- Parser 
- Runtime (class installer, cross referencer) 
- Exceptions
- Collections
- Streams
- Package
- Literal objects (character, string, number, symbol, booleans)
- Kernel  environment, classes, methods,....)
- Low-level concurrent abstractions (process, semaphore, delay, scheduler,..)

## Basic utilities
- Files
- HTTP/HTTPS * (thanks beta9)
- Network (TCP/UDP)
- JSON * (thanks beta9)
- COM/DCOM
- FFI
- Character encoding * (thanks beta9)
- Taskit 
- Command line 

## Drivers
- DB drivers
- SQLLight * (thanks beta9)

## Graphics
- Graphics Morphic
- Graphics Bloc
- Canvas Cairo (Athens)
- Widgets Morphic
- Widgets Toplo
- Bridge GTK
- Widgets GTK
- Application builder
- OS Event/SDL2 
- Roassal * (thanks ObjectProfile and M. Mamani)

## IDE
- Test Runner
- Syntax highlighter
- Pretty printer
- Completion
 + Application Packaging
 + "Maven" Package Repo
 + Package Manager
- Utils (Message Browser, Dependency, ProcessBrowser, Settings…)
- Code browser
- Refactoring engine
- Inspector
- Debugger
- Debugger UI 
- Debugger infrastructure
- Change recorder
- Microdown Online documentation support
- GitHub File Format
- Git
- Git UI


## C-libraries (libgit, ssl, ssh,...)
- Bytecode interpreter
- JIT Compilers
- Backends
- Unicorn Bridge
- Infrastructure testing (Unicorn)
- Infrastructure transpilation
- Garbage Collector
- Bench server

## Infrastructure
- Launcher
- Bootstrap
- Bug tracking
- Infrastructure CI
- Facing flaky tests
- Non-standard architectures (OBS, …)
- Benchmarks
- Maintenance/update running condition
- Deployment architecture

## Communication and community
- Documentation
- Books
- Consortium communication and organization
- Consortium contracting
- Discord presence
- Newsletters
- Annual Conference
- Company contacts
- Presentations at various events
- Blog posts
- Pharo article in dev forums
- Lectures
- GSOC
- Internships


## Conclusion

We hope that now you see that delivering Pharo is a large task.

</div>



