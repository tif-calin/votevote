# VoteVote
Deployed at https://votevote.page/

VoteVote takes a scored ballot and calculates what its equivalent ballot would look like for a large number of voting systems. Through this we can simulate the same election in FPTP, Instant Runoff, Approval, Borda, Condorcet, and many many more. The [original prototype](https://dontplaywithculi.netlify.app/votevote) of this implemented 28 different methods and this rebirth of it aims to surpass that.

Currently its just a toy, but it is completely open-sourced and might some day grow to be an actual tool. The main contributer of this project is culi, but I'm very interested in opening up the project for more contributers if anyone is interested in getting involved. Feel free to use whatever, however. If you do have a use for this tool, I'd LOVE to hear about it :)

[The VoteVote Figma](figma.com/@votevote)

## Voting methods
(28 implemented as of v0.1.3)
 - plurality: fptp, veto, signed, vfa
 - contingent: contingency, supplementary, sri_lanka
 - runoff: irv, coombs, fab_irv
 - positional: borda, nauru, eurovision, dabagh, binary_positional
 - evaluative: approval, disapproval, cav, score, range
 - condorcet: copeland, lull, kemeny_young, black
 - budgetary: cumulative, fractional, quadratic, equal_even

### Not yet implemented
 - median: typical_judgement, usual_judgement, central_judgement (evaluative aka average, so median is natural successor)
 - condorcet: dasgupta_maskin
 - bucklin: fallback, bucklin, vfa_runoff
 - hybrid: star, three_two_one
 - other: majority_judgement

### Not yet implemented or well-researched
 - [ ] tournament_borda (allows for ties and unranked candidates)
 - [ ] minimax
 - [ ] nanson
 - [ ] baldwin (aka borda_elmination, nanson_modified)
 - [ ] dodgeson
 - [ ] ranked_pairs
 - [ ] beat_path_winner
 - [ ] tideman_smith
 - [ ] tideman_schwartz (aka top_cycle)
 - [ ] river
 - [ ] smith_minimax
 - [ ] smith_irv
 - [ ] irv_btr (bottomTwoRunoffIRV)
 - [ ] fallback (aka bucklin, expandingApproval)
 - [ ] historical_bucklin
 - [ ] [sir](https://electowiki.org/wiki/Support/Include/Reject_voting)
 - [ ] [dasgupta_maskin](https://en.wikipedia.org/wiki/Copeland%27s_method) (copeland with borda tiebreaker)
 - [ ] [minimum_violations](https://pubs.aeaweb.org/doi/pdf/10.1257%2Fjep.9.1.3)

### Won't support
 - **non-deterministic methods**: At the moment we only support deterministic methods.
 - **multi-winner methods**: This wasn't the original intention of the site, but who knows.
 - **two/multi round methods**: We support contingent votes as well as some variations of it like runoff or sriLankanContingent. Two-round runoff is generally considered to be the mathematical equivalent of a two-round runoff by assuming voters don't change their minds from one the first round to the second. However, in the real world, voters often change their minds. We can possibly support a twoRoundRunoff if we come up with a method of changing views that's fair and mathematically sound. It might be non-deterministic, like adding some noise to the voter's preference of each candidate.
 - **methods that involve candidate behavior**: Methods like xxx involve the candidates themselves negotiating or voting. We don't have a good way of modeling candidate behavior.

### Lists of voting methods I wanna reach feature parity with:
 - [x] [nicky case's to build a better ballot](https://ncase.me/ballot/)
 - [ ] [the original prototype](https://dontplaywithculi.netlify.app/votevote/): 26-28 methods (<small>vfaRunoff, star, bucklin, historicalBucklin, threeTwoOne, majorityJudgement</small>)
 - [ ] [condorcet.org's list](https://web.archive.org/web/20050706055744/http://condorcet.org/emr/methods.shtml): ~21 methods (<small>Borda-Elimination, Bucklin, Dodgeson, Median Rating, Minmax, Nanson's Original, Pairwise-Elimination, Ranked Pairs (Tideman's), Schulze, Smith, Smith/Minmax, Sum of Defeats</small>)
 - [ ] [howtofixtheelection.com](https://www.howtofixtheelection.com/ballot/) (<small>STAR, Minimax, Schulze, Schulze Alternative, Ranked Pairs, Baldwin, Carey, Dodgeson, Nanson, Raynaud, Small, Tideman</small>)
 - [x] [electionscience.org](https://electionscience.org/voting-methods/an-assessment-of-six-single-winner-voting-methods/)
 - [ ] [electowiki category:single-winner](https://electowiki.org/wiki/Category:Single-winner_voting_methods)
 - [ ] [accurateddemocracy](https://www.accuratedemocracy.com/c_other.htm)
 - [ ] [smith2006](www.9mail.de/m-schulze/votedesc.pdf): over 40
 - [ ] [this electowiki diagram](https://electowiki.org/wiki/File:Voting_system_Euler_diagram.svg) (<small>Majority Judgement, STAR, 3-2-1, Schulze, Ranked Pairs, Minimax, Bucklin, MAV</small>)
 - [ ] [colin champion's experiments](https://www.masterlyinactivity.com/condorcet/condorcet.html#qdc)
 - [ ] [levin and nalebuff 1995](https://pubs.aeaweb.org/doi/pdf/10.1257%2Fjep.9.1.3)

## Tech

### Design philosophy
 - [gridless.design](https://gridless.design/)
 - Various "use the platform" takes

### Shoutouts
 - [lea verou's guide to scroll shadows](https://lea.verou.me/2012/04/background-attachment-local/)
 - [fontella](https://fontello.com) let me make a custom font to get consistent emoji rendering across devices! V cool
