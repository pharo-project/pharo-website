{
"title": "[ANN] Pharo in the Browser (WebAssembly)",
"layout": "blogpost",
"publishDate": "2026-11-17"
}

Massimo Nocentini announces his work on a fork of [pharo-project/pharo-vm](https://github.com/pharo-project/pharo-vm), branch [pharo-12](https://github.com/massimo-nocentini/pharo-vm/tree/pharo-12).

## Pharo in the browser (WebAssembly)

A new Emscripten platform (64-bit wasm) runs unmodified 64-bit images: Pharo 12, 13.1, 14 and 15.

- **Console:** a REPL page.
- **Notebook:** Smalltalk cells with syntax highlighting and HTML, SVG and Markdown output. Roassal canvases are drawn with cairo. Notebooks export to a static HTML page.
- **World:** the full Morphic desktop, drawn sharp on high-DPI screens.
- FFI on libffi 3.8.0, FreeType text, and cairo for Athens and Roassal.
- **Iceberg works in the browser.** libgit2 1.4.4 clones, commits, pulls and pushes over HTTPS through a CORS proxy, with a user name and a token. Cloning from github.com works too.
- You can open a local image or a Pharo zip, keep several saved images in the browser, and file in .st files.
- The same VM runs headless under node, for scripts and CI.

Try it:

- [Console and Notebook](https://massimo-nocentini.github.io/pharo-vm/)
- [The World](https://massimo-nocentini.github.io/pharo-vm/world.html)

## SimdJSONPlugin

JSON parsing with simdjson 5.0.5.

- SimdJSONReader and SimdJSONWriter have NeoJSON's API, mappings included. The reader is strict RFC 8259, and the writer's output matches NeoJSON's byte for byte.
- Reading is 13–70× faster than NeoJSON on the Cog VM, and 89–458× faster in WebAssembly.
- The Smalltalk code loads with Metacello from [simdjson.st](https://github.com/massimo-nocentini/simdjson.st).

## Native VM fixes

- **LargeIntegers:** a heap-overflow fix, 64-bit limbs, Karatsuba and squaring, Burnikel–Ziegler division and 64-bit Montgomery multiplication, with tests.
- Memory-safety and crash fixes in BitBlt (no more SIGFPE), the JPEG plugins, File/NewFile, FileAttributes, SqueakSSL, DSA, MiscPrimitive, Surface, Locale and OSProcess.
- SocketPlugin name lookups no longer freeze the image.
- Fixes to the FFI-queue and semaphore code, and to session IDs that repeated after a save.

## Builds

CI on GitHub Actions builds Linux (x86_64, aarch64), macOS (x86_64, arm64), Windows (x86_64, arm64, MSYS2) and WebAssembly, all with clang. Each push to pharo-12 publishes a release with all seven zips: [releases](https://github.com/massimo-nocentini/pharo-vm/releases).

## Feedback

Feedback is welcome, and Massimo would be glad to upstream whatever is useful to pharo-project.

He thanks Richard Uttner for the support, discussions, reviews and friendship behind all of this.
