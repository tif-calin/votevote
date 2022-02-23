# votevote
Deployed at https://votevote.page/

VoteVote takes a scored ballot and calculates what its equivalent ballot would look like for a large number of voting systems. Through this we can simulate the same election in FPTP, Instant Runoff, Approval, Borda, Condorcet, and many many more. The [original prototype](https://dontplaywithculi.netlify.app/votevote) of this implemented 26 different methods and this rebirth of it aims to surpass that. 

Currently its just a toy, but it is completely open-sourced and might some day grow to be an actual tool. The main contributer of this project is culi, but I'm very interested in opening up the project for more contributers if anyone is interested in getting involved. Feel free to use whatever, however. If you do have a use for this tool, I'd LOVE to hear about it :) 

## list of voting methods

(18 implemented as of v0.1.2)
plurality: fptp, veto, signed, vfa
contingent: contingency, supplementary, sl_contingency
runoff: irv, coombs, fab_irv
positional: borda, nauru, eurovision, dabagh, binary_positional
approval: approval, disapproval, cav, 

condorcet: copeland, kemeny_young
bucklin: fallback, bucklin, vfa_runoff
hybrid: star, three_two_one
weighted: cumulative, quadratic
other: majority_judgement

other
 - [ ] tournament_borda (allows for ties and unranked candidates)
 - [ ] lull_copeland
 - [ ] minimax
 - [ ] nanson
 - [ ] baldwin
 - [ ] dodgeson
 - [ ] ranked_pairs
 - [ ] beat_path_winner
 - [ ] tidemansAlternativeSmith
 - [ ] tidemansAlternativeSchwartz
 - [ ] river
 - [ ] black
 - [ ] irv_btr (bottomTwoRunoffIRV)
 - [ ] fallback (aka bucklin, expandingApproval)
 - [ ] historical_bucklin
 - [ ] cumulative, range, score
 - [ ] sir (https://electowiki.org/wiki/Support/Include/Reject_voting) 

### Not supported
 - **non-deterministic methods**: At the moment we only support deterministic methods.
 - **multi-winner methods**: This wasn't the original intention of the site, but who knows.
 - **two/multi round methods**: We support contingent votes as well as some variations of it like runoff or sriLankanContingent. Two-round runoff is generally considered to be the mathematical equivalent of a two-round runoff by assuming voters don't change their minds from one the first round to the second. However, in the real world, voters often change their minds. We can possibly support a twoRoundRunoff if we come up with a method of changing views that's fair and mathematically sound. It might be non-deterministic, like adding some noise to the voter's preference of each candidate.
 - **methods that involve candidate behavior**: Methods like xxx involve the candidates themselves negotiating or voting. We don't have a good way of modeling candidate behavior.
