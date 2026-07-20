{
"title" : "Bloc/Toplo Release",
"layout" : "blogpost",
"publishDate" : "2026-07-18"
}

Hello all,

We have releases for the core Bloc/Toplo repos:
- https://github.com/pharo-graphics/Alexandrie/releases/tag/v2.9.0
- https://github.com/pharo-graphics/Bloc/releases/tag/v2.9.0
- https://github.com/pharo-graphics/Album/releases/tag/v0.10.0
- https://github.com/pharo-graphics/Toplo/releases/tag/v0.10.0
- https://github.com/pharo-graphics/Spec-Toplo/releases/tag/v0.10.0

Below you can read the release notes for each repository.


### Alexandrie v2.9.0

This is the code used to demonstrate during the talk at ESUG'2026
https://esug.org/2026-Conference/agenda.html.

#### What's Changed

- Addin the ability to duplicate a Image Surface by @tesonep
      https://github.com/tesonep in #124
      https://github.com/pharo-graphics/Alexandrie/pull/124
- Test duplicate and copy device scale and offset by @tinchodias
      https://github.com/tinchodias in #125
      https://github.com/pharo-graphics/Alexandrie/pull/125
- Initialize enumerations in baseline + Refactoring + Do not assume
      SDL2 is present by @tinchodias https://github.com/tinchodias in #126
      https://github.com/pharo-graphics/Alexandrie/pull/126
- Add group without tests by @tinchodias
      https://github.com/tinchodias in #120
      https://github.com/pharo-graphics/Alexandrie/pull/120
- Fix AeCairoLibraryTest by @tinchodias
      https://github.com/tinchodias in #129
      https://github.com/pharo-graphics/Alexandrie/pull/129
- Move to FFIStructure and FFIArray by @tinchodias
      https://github.com/tinchodias in #127
      https://github.com/pharo-graphics/Alexandrie/pull/127

Full Changelog: v2.8.0...v2.9.0
- https://github.com/pharo-graphics/Alexandrie/compare/v2.8.0...v2.9.0



### Bloc v2.9.0

This is the code used to demonstrate during the talk at ESUG'2026
https://esug.org/2026-Conference/agenda.html .

The new "BlocHost-OSWindow-SDL3" package is not loaded by the baseline. You
can manually load it using Iceberg in Pharo 14 after loading PharoSDL3
v0.3.0 https://github.com/pharo-graphics/PharoSDL3/releases/tag/v0.3.0.

#### What's Changed


- Pass on demo browser and its model by @tinchodias
      https://github.com/tinchodias in #849
      https://github.com/pharo-graphics/Bloc/pull/849
-  Take into account the value of space's fullscreen attribute on open
      by @tinchodias https://github.com/tinchodias in #851
      https://github.com/pharo-graphics/Bloc/pull/851
-  Ensure bounds for interval calculations by @badetitou
      https://github.com/badetitou in #854
      https://github.com/pharo-graphics/Bloc/pull/854
-  Fix breadth first and test it + refactorings in test suite by
      @tinchodias https://github.com/tinchodias in #858
      https://github.com/pharo-graphics/Bloc/pull/858
-  Add BlocHost-OSWindow-SDL3 by @tinchodias
      https://github.com/tinchodias in #861
      https://github.com/pharo-graphics/Bloc/pull/861
-  More sophisticated host's #isSupported by @tinchodias
      https://github.com/tinchodias in #862
      https://github.com/pharo-graphics/Bloc/pull/862
-  add test for secondary click simulation by @badetitou
      https://github.com/badetitou in #863
      https://github.com/pharo-graphics/Bloc/pull/863
-  Open geometry ignores outskirts by @tinchodias
      https://github.com/tinchodias in #865
      https://github.com/pharo-graphics/Bloc/pull/865
-  Flatten bezier when first or last pairs of control points are too
      close by @tinchodias https://github.com/tinchodias in #864
      https://github.com/pharo-graphics/Bloc/pull/864

#### New Contributors

- @badetitou https://github.com/badetitou made their first
      contribution in #854 https://github.com/pharo-graphics/Bloc/pull/854

Full Changelog: v2.8.0...v2.9.0
- https://github.com/pharo-graphics/Bloc/compare/v2.8.0...v2.9.0



### Album v0.10.0

Tests are green. This is the code used to demonstrate during the talk at
ESUG'2026 https://esug.org/2026-Conference/agenda.html.

#### What's Changed


- AlbTextEditorHistory: tolerate text that was replaced by @tinchodias
      https://github.com/tinchodias in #56
      https://github.com/pharo-graphics/Album/pull/56
- Fix broken tests and examples by @tinchodias
      https://github.com/tinchodias in #57
      https://github.com/pharo-graphics/Album/pull/57 
- Clean up regarding cursors/cursor by @tinchodias
      https://github.com/tinchodias in #58
      https://github.com/pharo-graphics/Album/pull/58 
-  AlbTextEditorCursor: Remove collection API by @tinchodias
      https://github.com/tinchodias in #61
      https://github.com/pharo-graphics/Album/pull/61 
-  Fix that shouldn't open a space by itself by @tinchodias
      https://github.com/tinchodias in #62
      https://github.com/pharo-graphics/Album/pull/62 
-  Delete 2 year old deprecated methods by @tinchodias
      https://github.com/tinchodias in #64
      https://github.com/pharo-graphics/Album/pull/64 

Full Changelog: v0.9.0...v0.10.0
https://github.com/pharo-graphics/Album/compare/v0.9.0...v0.10.0 



### Toplo v0.10.0

This is the code used in the demonstrations at ESUG'2026
https://esug.org/2026-Conference/agenda.html talk.

#### What's Changed


- Tab list element selection review by @plantec
      https://github.com/plantec in #377
      https://github.com/pharo-graphics/Toplo/pull/377 
-  Menu cleaning by @plantec https://github.com/plantec in #379
      https://github.com/pharo-graphics/Toplo/pull/379 
-  fixes lookupTokenPropertyValueNamed: by @plantec
      https://github.com/plantec in #380
      https://github.com/pharo-graphics/Toplo/pull/380 
-  Fix MNU in #example_ListWithAllClassesNone by @tinchodias
      https://github.com/tinchodias in #386
      https://github.com/pharo-graphics/Toplo/pull/386 
-  ToCircularMenuLayout: check if the parentMenu is nil before
      querying isSubmenu by @tinchodias https://github.com/tinchodias in
      #385 https://github.com/pharo-graphics/Toplo/pull/385 
-  Send next only once in #albumEditorElement by @tinchodias
      https://github.com/tinchodias in #384
      https://github.com/pharo-graphics/Toplo/pull/384 
-  Delete 2 year old deprecated methods by @tinchodias
      https://github.com/tinchodias in #387
      https://github.com/pharo-graphics/Toplo/pull/387 
-  ToCompletionEngine: update after rename in Album by @tinchodias
      https://github.com/tinchodias in #388
      https://github.com/pharo-graphics/Toplo/pull/388 

Full Changelog: v0.9.0...v0.10.0
https://github.com/pharo-graphics/Toplo/compare/v0.9.0...v0.10.0 



### Spec-Toplo v0.10.0

This is the code used in the demonstrations at ESUG'2026
https://esug.org/2026-Conference/agenda.html talk.

#### What's Changed


- Add methods that tests require from adapters to make assertions by
      @tinchodias https://github.com/tinchodias in #89
      https://github.com/pharo-graphics/Spec-Toplo/pull/89 

Full Changelog: v0.9.0...v0.10.0
https://github.com/pharo-graphics/Spec-Toplo/compare/v0.9.0...v0.10.0 


Cheers,
Mart=C3=ADn
