# Changelog
This changelog is inspired by [keepachangelog.com](https://keepachangelog.com/en/1.0.0). This project does not adhere to [semver](https://semver.org/), but adheres to [0ver](https://0ver.org/). 

## [0.1.1.0] - 2022-02-17
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
 

