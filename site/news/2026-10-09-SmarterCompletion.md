{
"title": "Smarter code completion",
"layout": "blogpost",
"publishDate": "2026-10-09"
}

A new version v0.9.5 of the code completion has been released and is available for loading in Pharo 14.

This new version 
- uses the history of your choices to guess better what you want to do 
- remembers the selectors and classes you just created
and this in addition to the package dependency that already massively improves the accurracy to the completion. 

Just try it using the load menu item in the Library menu or simply 

```
Metacello new
    baseline: 'ExtendedHeuristicCompletionHistory';
    repository: 'github://omarabedelkader/HeuristicCompletion-History:v0.9.5/src';
    onConflictUseIncoming;
		load
```
