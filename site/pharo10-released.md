{
"title": "Pharo 10 Released!",
"layout": "blogpost",
"publishDate": "2022-04-05"
}

Dear Pharo users and dynamic language lovers: 

We have released Pharo version 10 !

**Pharo is a pure object-oriented programming language and a powerful environment, focused on simplicity and immediate feedback.**

![](https://files.pharo.org/web-images/news/p10.png)

Pharo 10 was a short iteration where we focused mainly on stability and enhancement of the environment :


- Massive system cleanup: gained speed, removed dead code, removed old/deprecated frameworks \(Glamour, GTTools, Spec1\)
- All Remaining tools written using the deprecated frameworks have been rewritten: Dependency Analyser, Critique Browser, and many other small utilities.
- Modularisation has made a leap, creating correct baselines \(project descriptions\) for many internal systems, making possible the work and deployment of minimal images.
- Removing support for the old Bytecode sets and embedded blocks simplified the compiler and language core.
- As a result, our image size has been reduced by 10% \(from 66MB to 58MB\)
- The VM has also improved in several areas: better async I/O support, socket handling, FFI ABI,  


Even being a short iteration, we have closed a massive amount of issues: around 600 issues and 700 pull requests. A more extended changelog can be found at [here](https://github.com/pharo-project/pharo-changelogs/blob/master/Pharo100ChangeLogs.md).

While the technical improvements are significant, still the most impressive fact is that the new code that got in the main Pharo 10 image was contributed by more than 80 people.

Pharo is more than code. It is an exciting project involving a great community. 

We thank all the contributors to this release:

Aaron Bieber, Ackerley Tng, Alban Benmouffek, Alejandra Cossio, Aless Hosry, Alexandre Bergel, Aliaksei Syrel, Alistair Grant, Arturo Zambrano, Asbathou Biyalou-Sama, Axel Marlard, Bastien Degardins, Ben Coman, Bernardo Contreras, Bernhard Pieber, Carlo Teixeira, Carlos Lopez, Carolina Hernandez, Christophe Demarey, Clotilde Toullec, Connor Skennerton, Cyril Ferlicot, Dave Mason, David Wickes, Denis Kudriashov, Eric Gade, Erik Stel, Esteban Lorenzano, Evelyn Cusi Lopez, Ezequiel R. Aguerre, Gabriel Omar Cotelli, Geraldine Galindo, Giovanni Corriga, Guille Polito, Himanshu, Jan Bliznicenko, Jaromir Matas, Kasper Østerbye, Kausthub Thekke Madathil, Konrad Hinsen, Kurt Kilpela, Luz Paz, Marco Rimoldi, Marcus Denker, Martín Dias, Massimo Nocentini, Max Leske, Maximilian-ignacio Willembrinck Santander, Miguel Campero, Milton Mamani Torres, Nahuel Palumbo, Norbert Hartl, Norm Green, Nour Djihan, Noury Bouraqadi, Oleksandr Zaitsev, Pablo Sánchez Rodríguez, Pablo Tesone, Pavel Krivanek, Pierre Misse-Chanabier, Quentin Ducasse, Raffaello Giulietti, Rakshit, Renaud de Villemeur, Rob Sayers, Roland Bernard, Ronie Salgado, Santiago Bragagnolo, Sean DeNigris, Sebastian Jordan Montt, Soufyane Labsari, Stephan Eggermont, Steven Costiou, Stéphane Ducasse, Sven Van Caekenberghe, Theo Rogliano, Thomas Dupriez, Théo Lanord, Torsten Bergmann, Vincent Blondeau.
 
\(If you contributed to Pharo 10 development in any way and we missed your name, please send us an email and we will add you\).

Enjoy!

_The Pharo Team_

Discover Pharo: [https://pharo.org/features](https://pharo.org/features)

Try Pharo: [http://pharo.org/download](http://pharo.org/download)

Learn Pharo: [http://pharo.org/documentation](http://pharo.org/documentation)
