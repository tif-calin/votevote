# Changelog
This changelog is inspired by [keepachangelog.com](https://keepachangelog.com/en/1.0.0). This project does not adhere to [semver](https://semver.org/), but adheres to [0ver](https://0ver.org/). 

## [0.1.2.2] - 2022-04-30
### Added
 - new voting method: equal_even
 - explanatory infobox
 - added a sitemap.xml

### Changed
 - first block's explanation defaults to open
 - add new preview img and apple icon for site links
 - minor styling tweaks 
    - left input sizing
    - x-axis ticks
    - input buttons now pink on hover
    - input selects and inputs now have dashed borders

### Fixed
 - cross-browser styling tweaks
    - firefox lacks support for invert() for backdrop-filter so I hardcoded the background color
    - improved styling consistency for selects and inputs
    - x-axis labels are the now in the same position
    - firefox bar labels don't disappear when longer than bar

## [0.1.2.1] - 2022-03-01
### Fixed
 - Safari transparency interpolation bug work around for scroll shadows
 - rainbow title works on Safari
 - fixed unicode symbols rendering as emojis by making a custom font lol. TYFYS U+fe0e

### Changed
 - shorter input container for smaller screens
 - added `accent-color` (pink :P)
 - cleaned up some parts of the code
 - consolidated voting system info

## [0.1.2.0] - 2022-02-29
### Added
 - 15 new voting methods:
    - positional: borda, nauru, eurovision, dabagh, binary_positional
    - evaluative: approval, disapproval, cav, score, range
    - condorcet: copeland, lull
    - cumulative: cumulative, fractional, quadratic
 - styling: amazing scroll shadows
 - bars will show scores on hover

### Improved
 - method options won't take up more than 50% of the block width and now scrolls for more options
 - input menu now stickies to screen on desktop view
 - voter display improvements
    - hovering over a voter to see their preference ratings is much more readable now
    - voter display now becomes scrollable if there's too many voters
 - navigating between routes scrolls to top

### Changed
 - renamed some methods: `cont` is now `contingency`, `supp` is now `supplementary`, and `sl_cont` is now `sri_lanka`
 - title capitalization changed from "votevote" to "VoteVote" :')
 - add new voters to the top of the voter display
 - longer default voter preset to show off scrollable voter display
 - increased left padding on bar charts
 - removing voter or candidate sets selection to removed option

### Fixed
 - random selection might choose a candidate/voter that's already in the roster
 - x-offset for bar text no longer wacky for smol screens

## [0.1.1.1] - 2022-02-18
### Fixed
 - firefox charts don't take up full height of container
 - firefox number input styling fix

**Archive**: https://web.archive.org/web/20220216065954/https://votevote.page/

## [0.1.1.0] - 2022-02-18
### Added
 - new voting systems:
    - contingency voting (aka top 2 instant runoff)
    - supplementary voting
    - sri-lankan contingency voting
 - new election calculating class that takes advantage of cacheing for more efficient calculations
 - voting systems now show winner(s) in text
 - basic tests for some of the voting systems
 - clicking on the round number will now pause the round

### Changed
 - round display changed from 2.5s to 1.9s
 - can no longer add voters that have already been added

### Fixed
 - netlify url navigation
 - overlapping x-tick labels sorta fixed
 - winners with negative scores don't show thick stroke

## [0.1.0.1] - 2022-02-15
### Fixed
 - unsupported javascript features caused crash on mobile devices

## [0.1.0.0] - 2022-02-15
### Added
 - 7 voting methods (and their visualizations) split into 2 blocks:
   - plurality: fptp, veto, signed, vfa
   - runoff: irv, coombs, fab_irv
 - 1 dataset: xkcd RGB colors
   - source: [xkcd color survey](https://xkcd.com/color/rgb/)
   - distance function is an average of RGB and HSL distance with an activator function
 - ability to input candidates and voters and see live updates to the results
 - don't have anything specific but I spent a lot of time just polishing things so I think it deserves a bullet point lol
 - changelog page

**Description**: This project originally started as a project by me (culi) and the first prototype was made and deployed at [dontplaywithculi.netlify.app/votevote](https://dontplaywithculi.netlify.app/votevote). The original prototype only had visualizations for 3 methods (irv, coombs, and fab_irv), but allowed you to at least view the winners of the election simulated in 26 different methods! During the creation of that, I realized a number of optimizations that could be made, but decided to hold off until I rebuilt the whole thing from scratch. Version 0.1 marks what I consider to be on par with the original prototype despite lacking 19 of the originally implemented methods.

**Archive**: [archive](https://web.archive.org/web/20220215225237/https://votevote.page/)
 

