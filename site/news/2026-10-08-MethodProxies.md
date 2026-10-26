{
"title" : "MethodProxies",
"layout" : "blogpost",
"publishDate" : "2026-10-08"
}

Just a little announce to mention that the library MethodProxies is available at
https://github.com/pharo-contributions/MethodProxies

MethodProxies is a Pharo instrumentation library for **message-passing control**. It lets you execute custom code **before**, **after**, **instead of**, or **during the unwind of** any method execution — without changing the method's source.

It is designed for building profilers, tracers, call-graph analyzers, mocks, and other dynamic analysis tools. Its stratified architecture cleanly separates the instrumentation mechanism (handled by the framework) from the user-defined behavior, so all you need to do is **subclass a handler** and define a few hooks.

MethodProxies guarantees:

- **Meta-safety** — instrumented methods can safely call other instrumented methods without triggering infinite recursion.
- **Unwind-safety** — non-local returns and exceptions are handled correctly.
- **Meta-thread safety** — the meta-level state is tracked per process.
- **Dynamic (de)instrumentation** — instrumentation can be installed and removed at run time.
- **Practical overhead** — the trap-method approach integrates with the JIT and with polymorphic inline caches.

And now we have a nice article 
https://inria.hal.science/hal-05729849/file/main.pdf
