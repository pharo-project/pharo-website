{
"title": "Pharo News of the Week 47/2026",
"layout": "blogpost",
"publishDate": "2026-11-20"
}

*13 November – 20 November 2026*

## Highlights

- Pharo runs in the browser: the VM now builds for WebAssembly (see News).
- Pharo 15 keeps reworking Metacello (several roots, dev mode, version-resolution report) and splitting the image into packages with their own baselines and isolated tests (Regex, Fuel, Flashback, Morphic).
- Hermes v3.1.0 is tagged and now used by the Pharo 15 bootstrap, which is also documented in bootstrap/README.md and cached in CI.
- Pharo Launcher gets drag-and-drop import, coloured image dates and Spec-Toplo on its dev branch.
- Merged PRs: pharo 22 (Pharo 15: 19, Pharo 14: 2, Pharo 12: 1), pharo-vm 7, Spec 10, NewTools 5, iceberg 1, hermes 7, pharo-launcher 7.

## News

- [Pharo Consortium: new academic member SIGMA](https://pharo.org/news/2026-11-12-Consortium-sigma.html) (14 Nov)
- [A new website for the Pharo MOOC](https://pharo.org/news/2026-11-13-PharoMooc-NewSite.html) (16 Nov)
- [A Bar of Utilities for the Pharo IDE](https://ferlicot.fr/posts/2026-11-07_pharo-utilities-bar/) (16 Nov), blog post with a screen recording
- Video: [Esteban Lorenzano - Pulsar: Use It. Break It. Improve It.](https://www.youtube.com/watch?v=jNC_rNZjsXI) (16 Nov), UK Smalltalk User Group talk of 28 October
- [AgenticBrowser has reached 2.0](https://github.com/mumez/pharo-agentic-browser/releases/tag/v2.0.0) (17 Nov)
- [Pharo in the Browser (WebAssembly)](https://pharo.org/news/2026-11-17-PharoVM-WebAssembly.html) (18 Nov)
- [pharo-agentic-browser-opencode-docker v2](https://github.com/mumez/pharo-agentic-browser-opencode-docker) (19 Nov), Docker setup for AgenticBrowser with opencode

Follow on [Mastodon](https://mastodon.social/@pharoproject)

## Pharo 15

19 merged PRs on Pharo15.

### Metacello

- [#20222](https://github.com/pharo-project/pharo/pull/20222) Resolve from several roots
- [#20229](https://github.com/pharo-project/pharo/pull/20229) Name several baselines in a script
- [#20232](https://github.com/pharo-project/pharo/pull/20232) Report Metacello Version Resolution
- [#20252](https://github.com/pharo-project/pharo/pull/20252) Metacello dev mode
- [#20253](https://github.com/pharo-project/pharo/pull/20253) Print the report when metacello install finds resolution errors

### Bootstrap and CI

- [#20251](https://github.com/pharo-project/pharo/pull/20251) Bump bootstrap hermes version to v3.1.0
- [#20257](https://github.com/pharo-project/pharo/pull/20257) Cache the bootstrap in CI
- [#20261](https://github.com/pharo-project/pharo/pull/20261) Initialize Morphic in a bootstrap stage
- [#20262](https://github.com/pharo-project/pharo/pull/20262) Add a documentation of the bootstrap process in bootstrap/README.md

### Modularisation (own baselines, isolated tests)

- [#20254](https://github.com/pharo-project/pharo/pull/20254) Give Regex a baseline of its own
- [#20255](https://github.com/pharo-project/pharo/pull/20255) Fuel baseline dependencies and ISO tests
- [#20258](https://github.com/pharo-project/pharo/pull/20258) Flashback ISO tests
- [#20263](https://github.com/pharo-project/pharo/pull/20263) Remove DebugSession events

### Tools

- [#20226](https://github.com/pharo-project/pharo/pull/20226) Fixing the EntryCompletion to support `keyDown:`
- [#20227](https://github.com/pharo-project/pharo/pull/20227) Deprecate ClassActivation and simplify the command registration mechanism of Calypso

### Reverts

- [#20244](https://github.com/pharo-project/pharo/pull/20244) Load Spec2 from Ducasse/Spec:workingOnSpecRules to validate it in the CI (reverted the same day by #20260)
- [#20260](https://github.com/pharo-project/pharo/pull/20260) Revert of #20244
- [#20192](https://github.com/pharo-project/pharo/pull/20192) Use new Transcript API and deprecate old API (reverted the same day by #20246)
- [#20246](https://github.com/pharo-project/pharo/pull/20246) Revert of #20192

### Older branches

- [#20225](https://github.com/pharo-project/pharo/pull/20225) (Pharo 14) Fixing the EntryCompletion to support `keyDown:`
- [#20247](https://github.com/pharo-project/pharo/pull/20247) (Pharo 14) Use ssh.bitbucket.org for Bitbucket SCP URLs
- [#20249](https://github.com/pharo-project/pharo/pull/20249) (Pharo 12) Use ssh.bitbucket.org for Bitbucket SCP URLs

## VM and other repositories

### VM (pharo-project/pharo-vm)

- [#1123](https://github.com/pharo-project/pharo-vm/pull/1123) cmake: declare the downloaded VMMaker VM as a byproduct for ninja
- [#1142](https://github.com/pharo-project/pharo-vm/pull/1142) Extract GC statistics from SpurMemoryManager into SpurMemoryManagerStats
- [#1138](https://github.com/pharo-project/pharo-vm/pull/1138) Avoid unused byte-swap when skipping ScreenSize header word
- [#1140](https://github.com/pharo-project/pharo-vm/pull/1140) Follow otherObject instead of thisObject in primitiveNotIdentical
- [#1144](https://github.com/pharo-project/pharo-vm/pull/1144) Fix the RISC-V JIT backend (long jumps, far literal loads, overflow checks, long conditional branches)
- [#1145](https://github.com/pharo-project/pharo-vm/pull/1145) Remove Transcript noise from VMMakerTests
- [#1143](https://github.com/pharo-project/pharo-vm/pull/1143) (pharo-10) Fix Tests after adding checking correctness of the heap

### Spec (pharo-spec/Spec)

- [#1983](https://github.com/pharo-spec/Spec/pull/1983) [Pharo15] SpMorphicListViewAdapter: rows can have different heights
- [#1984](https://github.com/pharo-spec/Spec/pull/1984) New attempt at trying to fix flacky test
- [#1988](https://github.com/pharo-spec/Spec/pull/1988) Rename critique + New Rule (1981) + fix 1980 (new rule: presenter tests should be backend-agnostic)
- [#1989](https://github.com/pharo-spec/Spec/pull/1989) Add updateWindowTitle to presenters
- [#1990](https://github.com/pharo-spec/Spec/pull/1990) Add help text to notebook pages
- [#1991](https://github.com/pharo-spec/Spec/pull/1991) Add isNotEmpty to selections and selectedItems to single-selection trees
- [#1993](https://github.com/pharo-spec/Spec/pull/1993) Add multiline labels support
- [#1994](https://github.com/pharo-spec/Spec/pull/1994) Add logs to debug a flacky test
- [#1995](https://github.com/pharo-spec/Spec/pull/1995) Fix help changes on wrapping labels
- [#1959](https://github.com/pharo-spec/Spec/pull/1959) (Pharo14) Fix Morphic grid column sizing and support action bar center presenter

### NewTools (pharo-spec/NewTools)

- [#1571](https://github.com/pharo-spec/NewTools/pull/1571) Migrate commands to new registration mechanism
- [#1573](https://github.com/pharo-spec/NewTools/pull/1573) Enh file list browser (paste a path to navigate, class comments, tests)
- [#1576](https://github.com/pharo-spec/NewTools/pull/1576) Fixing rule violations
- [#1579](https://github.com/pharo-spec/NewTools/pull/1579) Update the debugger after each action instead of listening to its session
- [#1580](https://github.com/pharo-spec/NewTools/pull/1580) Remove duplicated method from trait

### Iceberg (pharo-vcs/iceberg)

- [#2085](https://github.com/pharo-vcs/iceberg/pull/2085) Answer what Metacello dev mode asks of a repository

### Hermes (pharo-project/hermes), tagged [v3.1.0](https://github.com/pharo-project/hermes/releases/tag/v3.1.0)

- [#27](https://github.com/pharo-project/hermes/pull/27) Migrate to tonel v3
- [#28](https://github.com/pharo-project/hermes/pull/28) Fix Hermes in P12 and add P13, 14, 15 compatibility
- [#29](https://github.com/pharo-project/hermes/pull/29) Do not export the method trailer with the bytecodes, so the installed methods can be decompiled
- [#30](https://github.com/pharo-project/hermes/pull/30) Split the command line tools by Pharo version
- [#31](https://github.com/pharo-project/hermes/pull/31) Update the comments of HermesClapCommand and HEClassTrait, and fail loadHermes on an unknown duplication action
- [#32](https://github.com/pharo-project/hermes/pull/32) Port the changes made in the copy of Hermes in Pharo
- [#33](https://github.com/pharo-project/hermes/pull/33) Remove the override of `RGEnvironment>>packages` from Hermes-Ring2

### Pharo Launcher (pharo-project/pharo-launcher), dev branch

- [#785](https://github.com/pharo-project/pharo-launcher/pull/785) Download the Compiler Course image from rmod-files
- [#786](https://github.com/pharo-project/pharo-launcher/pull/786) Point the Compiler Course template to its latest zip
- [#790](https://github.com/pharo-project/pharo-launcher/pull/790) Select image we just imported + remove deprecated code
- [#791](https://github.com/pharo-project/pharo-launcher/pull/791) Reorder Tonel files
- [#792](https://github.com/pharo-project/pharo-launcher/pull/792) Add colors to the date column to help visually find recent images
- [#793](https://github.com/pharo-project/pharo-launcher/pull/793) Import a Pharo image from a dropped folder
- [#795](https://github.com/pharo-project/pharo-launcher/pull/795) Add Spec-Toplo to the pharo launcher
- Also direct commits: a CI watchdog that stops hung tests after 20 minutes, and an update check when the launcher is opened as the world.

### pharo-website and PharoTalks

- [pharo-website](https://github.com/pharo-project/pharo-website): news pages for the MOOC site, the WebAssembly VM and a UK Smalltalk meeting; a fix to "A glimpse of Pharo" on the front page.
- [PharoTalks](https://github.com/pharo-project/PharoTalks) now links its talks to the YouTube videos.

pharo-setup-gha, pharo-zeroconf, PharoBootstrap, pharo-beacon, Topic-Rules: no commits this week.

## Mailing lists

- pharo-users: [#childrenMatching: vs #allChildrenMatching:](https://lists.pharo.org/hyperkitty/list/pharo-users@lists.pharo.org/thread/NB3EEHSH6YEVAJQAEYJFAELMA4MKJ4V5/) (20 Nov). In Pharo 15 FileSystem, `childrenMatching:` treats semicolon-separated patterns as alternatives while `allChildrenMatching:` treats the same string as one literal pattern; asks whether this is intended and proposes a fix.
- pharo-dev: quiet apart from last week's News of the Week.
