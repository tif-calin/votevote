# votevote

## To-do
 - [ ] fix SPA for gh-pages (https://github.com/rafgraph/spa-github-pages) 

## list of voting methods

plurality: fptp, veto, signed
contingent: contingent, supplementary, srilankancontingent
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
