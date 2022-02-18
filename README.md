# votevote
Deployed at https://votevote.page/

VoteVote takes a scored ballot and calculates what its equivalent ballot would look like for a large number of voting systems. Through this we can simulate the same election in FPTP, Instant Runoff, Approval, Borda, Condorcet, and many many more. The [original prototype](https://dontplaywithculi.netlify.app/votevote) of this implemented 26 different methods and this rebirth of it aims to surpass that. 

Currently its just a toy, but it is completely open-sourced and might some day grow to be an actual tool. The main contributer of this project is culi, but I'm very interested in opening up the project for more contributers if anyone is interested in getting involved. Feel free to use whatever, however. If you do have a use for this tool, I'd LOVE to hear about it :) 

## list of voting methods

plurality: fptp, veto, signed
contingent: cont, supp, sl_cont
instant runoff: irv, coombs, fabirv
condorcet: copeland, kemenyyoung
positional: borda
approval: approval, combinedApproval, vfa
bucklin: fallback, bucklin, vfar
hybrid: star, threeTwoOne
weighted: cumulative, quadratic
other: majorityJudgement

 - [x] firstPastThePost
 - [x] contingent
 - [x] supplementary
 - [x] sriLankanContingent 
 - [x] irv (aka rankedChoice, alternativeVote, hare)
 - [x] irvCoombs (aka coombs)
 - [x] fabIRV (aka front and back irv)
 - [x] copeland
 - [x] lullCopeland
 - [x] kemenyYoung (aka medianRelation)
 - [x] vfa (aka voteForAndAgainst, venzkeDisqualification)
 - [x] vfaRunoff (aka vfar)
 - [ ] minimax
 - [ ] nanson
 - [ ] baldwin
 - [ ] dodgeson
 - [ ] rankedPairs
 - [ ] beatPathWinner
 - [ ] tidemansAlternativeSmith
 - [ ] tidemansAlternativeSchwartz
 - [ ] river
 - [ ] black
 - [ ] irvBTR (bottomTwoRunoffIRV)
 - [x] borda
 - [x] bucklin (aka grandJunction)
 - [x] fallback (aka bucklin, expandingApproval)
 - [x] historicalBucklin
 - [x] cumulative (aka range, score)
 - [x] majorityJudgement
 - [x] approval
 - [x] combinedApproval
 - [x] star
 - [x] quadratic
 - [x] threeTwoOne

### Not supported
 - **non-deterministic methods**: At the moment we only support deterministic methods.
 - **multi-winner methods**: This wasn't the original intention of the site, but who knows.
 - **two/multi round methods**: We support contingent votes as well as some variations of it like runoff or sriLankanContingent. Two-round runoff is generally considered to be the mathematical equivalent of a two-round runoff by assuming voters don't change their minds from one the first round to the second. However, in the real world, voters often change their minds. We can possibly support a twoRoundRunoff if we come up with a method of changing views that's fair and mathematically sound. It might be non-deterministic, like adding some noise to the voter's preference of each candidate.
 - **methods that involve candidate behavior**: Methods like xxx involve the candidates themselves negotiating or voting. We don't have a good way of modeling candidate behavior.
