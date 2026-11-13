{
"title": "Pharo News of the Week 46/2026",
"layout": "blogpost",
"publishDate": "2026-11-13"
}

*6 November – 13 November 2026*

## Highlights

- Metacello in Pharo 15 gets a version resolver: MVS as a resolver, versions resolved before a load is recorded, preLoad/postLoad run once, and Iceberg can read a baseline at any ref.
- Commander 1 is deprecated; the Calypso and SystemCommands commands now use Commander 2, and NewTools follows.
- A busy week for community projects: Pharo in the Browser, Blossom (OpenStreetMap on Bloc), simdjson.st and DuckDB Smalltalk 0.3.0.
- Spec now ships an Agents.md with instructions for coding agents working with Spec.
- Merged PRs: Pharo 22, Spec 8, NewTools 6, Iceberg 3, pharo-vm 0.

## News

- [Ryu, Schubfach and Dragonbox for Pharo](https://github.com/SergeStinckwich/pharo-ryu) (6 Nov): shortest round-trip float-to-string conversion
- Announcement: next UKSTUG talk, [Martín Dias - PharoSDL3: New FFI Bindings for SDL3 in Pharo](https://www.meetup.com/ukstug/events/317324609/) (9 Nov), online, Wednesday 25 November
- [DuckDB Smalltalk v0.3.0](https://github.com/newapplesho/duckdb-smalltalk/releases/tag/v0.3.0) (10 Nov)
- Blog post: [Rendering Telescope Visualizations With Bloc](https://ferlicot.fr/posts/2026-11-05_telescope-bloc-connector/) (10 Nov)
- Video: [David Long - SecureCell, SageTea and the Road Back to Pharo](https://www.youtube.com/watch?v=x_sNGwLJA0g) (11 Nov), UK Smalltalk User Group, 26 August 2026
- [simdjson.st](https://github.com/massimo-nocentini/simdjson.st) (12 Nov): JSON reader and writer for Pharo 15, parsing done by simdjson, with the NeoJSON API
- [Blossom](https://github.com/NicolasAnquetil/Blossom) (12 Nov): an OpenStreetMap client for Pharo using the Bloc UI
- [Pharo in the Browser](https://massimo-nocentini.github.io/pharo-vm/world.html) (12 Nov)

Follow on [Mastodon](https://mastodon.social/@pharoproject)

## Pharo 15

22 pull requests merged into Pharo15 (7–12 Nov). Pharo 13 and 14 had no merges this week.

### Metacello and loading

- [#20211](https://github.com/pharo-project/pharo/pull/20211) Add MVS as a Metacello resolver
- [#20201](https://github.com/pharo-project/pharo/pull/20201) [Metacello] Resolve the versions of a load before recording it
- [#20220](https://github.com/pharo-project/pharo/pull/20220) Run Metacello preLoad and postLoad once
- [#20221](https://github.com/pharo-project/pharo/pull/20221) Leave baseline extensions out of the sandbox

### Bootstrap and baselines

- [#20014](https://github.com/pharo-project/pharo/pull/20014) Automatically register iceberg system projects
- [#20209](https://github.com/pharo-project/pharo/pull/20209) Name the undeclared variables the bootstrap finds
- [#20210](https://github.com/pharo-project/pharo/pull/20210) Iso Beacon
- [#20216](https://github.com/pharo-project/pharo/pull/20216) Fixing enlumineur dependency
- [#20199](https://github.com/pharo-project/pharo/pull/20199) Adding a tests group to referenceFinder

### Commander

- [#20175](https://github.com/pharo-project/pharo/pull/20175) Migrate Calypso and SystemCommands commands from Commander v1 to Commander2
- [#20190](https://github.com/pharo-project/pharo/pull/20190) Deprecate Commander 1

### Kernel and system

- [#20095](https://github.com/pharo-project/pharo/pull/20095) Transcript: Introduce API agnostic to internal line return
- [#20141](https://github.com/pharo-project/pharo/pull/20141) Run one mourn loop at a time
- [#20189](https://github.com/pharo-project/pharo/pull/20189) NumberParser: correctly round integers with a negative exponent
- [#20183](https://github.com/pharo-project/pharo/pull/20183) Introduce `<<<` to create class in the global environment for scripting
- [#20219](https://github.com/pharo-project/pharo/pull/20219) Let a Clap positional be optional
- [#20193](https://github.com/pharo-project/pharo/pull/20193) Use ssh.bitbucket.org for Bitbucket SCP URLs

### Tools

- [#20188](https://github.com/pharo-project/pharo/pull/20188) Faster feedback for class renames (the rename preview no longer blocks typing)
- [#20194](https://github.com/pharo-project/pharo/pull/20194) Pretty-print each method with the formatter of its package
- [#20150](https://github.com/pharo-project/pharo/pull/20150) Speed up progress bar

### Tests and documentation

- [#20178](https://github.com/pharo-project/pharo/pull/20178) Fix flaky extension tests
- [#20186](https://github.com/pharo-project/pharo/pull/20186) Better class comment in renraku

Direct commits: Zinc synced with svenvc/zinc (11 Nov), and `#collapseWithoutChange` added to mirror `#expandWithoutChange` (10 Nov).

## VM and other repositories

### Spec (pharo-spec/Spec), Pharo15

- [#1979](https://github.com/pharo-spec/Spec/pull/1979) Keep the Morphic progress bar label fitting its contents
- [#1978](https://github.com/pharo-spec/Spec/pull/1978) Adapter tests don't have to assert on the widget API
- [#1935](https://github.com/pharo-spec/Spec/pull/1935) Make the accessor to the adapter also check the UI state (adapter tests and async backends)
- [#1952](https://github.com/pharo-spec/Spec/pull/1952) Multiple expand
- New Agents.md with instructions for coding agents working with Spec (also on Pharo14)

### Spec, Pharo14

- [#1975](https://github.com/pharo-spec/Spec/pull/1975) Round fractional paned layout positions on Morphic
- [#1976](https://github.com/pharo-spec/Spec/pull/1976) Give SpInformDialog the preferred extent of a message dialog
- [#1960](https://github.com/pharo-spec/Spec/pull/1960) Keep a close box on Morphic dialog windows

### Spec, dev-3.0

- [#1949](https://github.com/pharo-spec/Spec/pull/1949) Adding missing method to MorphicTableAdapter

### NewTools (pharo-spec/NewTools), Pharo15

- [#1568](https://github.com/pharo-spec/NewTools/pull/1568) Fail a merge-or-load warning nobody can answer
- [#1563](https://github.com/pharo-spec/NewTools/pull/1563) Update Commander usage
- [#1565](https://github.com/pharo-spec/NewTools/pull/1565) Use new Transcript API
- [#1562](https://github.com/pharo-spec/NewTools/pull/1562) Add Browse in the settings browser (fixes #1426)

### NewTools, Pharo14 (merged into Pharo15 too)

- [#1566](https://github.com/pharo-spec/NewTools/pull/1566) Fix Morphic open file dialog answer
- [#1551](https://github.com/pharo-spec/NewTools/pull/1551) Do not wrap the file dialog filters in another collection

### Iceberg (pharo-vcs/iceberg), Pharo15

- [#2083](https://github.com/pharo-vcs/iceberg/pull/2083) Read a Metacello baseline at any ref
- [#2082](https://github.com/pharo-vcs/iceberg/pull/2082) Metacello repositories answer their versions and baselines
- [#2080](https://github.com/pharo-vcs/iceberg/pull/2080) Use new Transcript API
- A "Quick Project Loader" is in progress on its own branch.

### Pharo Launcher (pharo-project/pharo-launcher)

- Work on the new-unify-ui-interactions branch (not yet merged): download failures are signalled to the caller, template extraction shows progress, and patches for the Spec and NewTools fixes above.

### Other repositories

- [PharoTalks](https://github.com/pharo-project/PharoTalks): tutorial and talk videos added to the talks page.
- [pharo-website](https://github.com/pharo-project/pharo-website): news added (12 Nov).
- pharo-vm: no commits this week.

## Mailing lists

- [UKSTUG Meeting: Martín Dias - PharoSDL3: New FFI Bindings for SDL3 in Pharo - 25 November 2026](https://lists.pharo.org/hyperkitty/list/pharo-users@lists.pharo.org/thread/NZ3ZYOXDZF6I4IBAKMYYGIMXJZ6LDYDJ/) (pharo-users, 7 Nov): online talk on the new SDL 3 bindings, with demos and Q&A; sign-up via Meetup.
- [The Origin of the Name of this Blog](https://lists.pharo.org/hyperkitty/list/pharo-dev@lists.pharo.org/thread/HESTKFZCZOPZNN3DZMZSKCVBMFOV3B3T/) (pharo-dev and pharo-users, 11 Nov): a new post on [all: objects all: theTime](https://all-objects-all-the-time.st/#/blog/posts/30) about how the blog got its name, with some Smalltalk history.
