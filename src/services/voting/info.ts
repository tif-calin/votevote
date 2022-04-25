type Info = {
  names?: string[];
  explanation?: string;
  links?: {
    wikipedia?: string;
    electowiki?: string;
  };
  classifications?: string[];
};

const classifications = ['positional', 'condorcet'];

const info: { [methodKey: string]: Info } = {
  /* plurality block */
  fptp: {
    names: ['First Past the Post', 'Plurality', 'Choose-One'],
    explanation: 'First Past the Post, aka Plurality, is one of the most common voting methods. Every voter votes for a single candidate and the candidate with the most votes wins.',
    classifications: [
      'positional' /* i === 0 */
    ]
  },
  veto: {
    names: ['Anti-Plurality', 'Veto'],
    explanation: 'Veto is essentially the same except instead of voting FOR a candidate, you vote against a candidate. The least hated candidate wins.',
    links: {
      wikipedia: 'https://en.wikipedia.org/wiki/Anti-plurality_voting',
    },
    classifications: [
      'positional' /* -(i === N) */
    ],
  },
  signed: {
    names: ['Boehm Signed', 'Balanced Plurality', 'Negative', 'Bipolar'],
    explanation: 'What if you could choose whether you want to vote FOR a candidate or AGAINST a candidate?',
    links: {
      electowiki: 'https://electowiki.org/wiki/Negative_vote',
    },
  },
  vfa: {
    names: ['Vote for and Against'],
    explanation: 'Vote For and Against is similar to Signed, but you don\'t have to choose! In fact, you\'re required to vote both FOR a candidate as well as against another.',
    classifications: [
      'positional' /* (i === 0) - (i === N) */
    ],
  },
  /* contingency */
  contingency: {
    names: ['Contingency', 'Two-Round Runoff'],
    explanation: 'The Contingent vote is kinda like an automatic version of the primary/general system seen in many parts of the US. With the major assumption that voter preferences wouldn\'t change between the primary and general vote. In Contingent votes, voters rank their preferences. If no candidate gets a majority in the first round, all except for the top 2 (more if there are ties) candidates get eliminated. Every voter that voted for an eliminated candidate will have their vote moved to whichever of the two candidates they prefer over the other.',
  },
  supplementary: {
    names: ['Supplementary'],
    explanation: 'The Supplementary vote is similar to contingency except voters only rank 1 alternative. If neither of their two votes makes it to the second round (if there is a second round), then they simply don\'t vote for anyone.'
  },
  sri_lanka: {
    names: ['Sri Lankan Contingency'],
    explanation: 'In Sri Lanka, they use a version of the supplmentary vote to elect their president. Instead of ranking only their top 2 choices, they rank their top 3.'
  },
  /* runoff */
  irv: {
    names: ['Instant Runoff Voting', 'Alternative Vote', 'Preferrential'],
    explanation: 'IRV is the most well-known for of ranked-choice voting. Every round, if no candidate has gotten a majority of the remaining votes, the candidate with the fewest votes is eliminated. Those who voted for that candidate will have their vote move to their next highest pick.',
  },
  coombs: {
    names: ['Coombs IRV', 'Coombs Rule'],
    explanation: 'This is basically the same as IRV except instead of eliminating the candidate with the fewest first-choice votes, you eliminated the candidate with the most last-choice votes. Essentially, you remove the most hated candidate each round.'
  },
  fab_irv: {
    names: ['Front and Back IRV'],
    explanation: 'I\'m not quite sure what to call this method (I call it "Front and Back IRV"), but it seems like a pretty logical next step in the succession of things to take into account both first-choice and last-choice votes, right? In this method, you calculate a score for each candidate by adding up how many voters picked them first and subtract away how many voters picked them last. If there\'s no candidate with a majority of first-choice votes, you remove the candidate with the lowest score.'
  },
  /* positional block */
  borda: {
    names: ['Borda Count', 'Borda Count'],
    explanation: 'Say there\'s 5 candidates. Your first choice gets 4 points, your second choice gets 3, your third gets 2, fourth gets 1, and last choice gets none. This is the Borda count method!',
    classifications: [
      'positional' /* N - i - 1 */
    ],
  },
  nauru: {
    names: ['Nauru', 'Dowdall', 'Harmonic Borda Count'],
    explanation: 'Similar to Borda, but instead of each candidate getting "n-i" points, each candidate gets "1/i" points. So the first choice gets 1, second choice gets 1/2, third gets 1/3, etc. This method is used by the island of Nauru!',
    classifications: [
      'positional' /* 1/(i+1) */
    ],
  },
  eurovision: {
    names: ['Eurovision Song Contest', 'Eurovision'],
    explanation: 'Eurovision uses a unique (arbitrary) voting system where the first candidate gets 12 points, the second gets 10, and the next 8 get 8, 7, 6, ..., etc. All others get 0. This voting method is used in the Eurovision Song Contest.',
    classifications: [
      'positional' /* 12, 10, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, ..., 0 */
    ],
  },
  dabagh: {
    names: ['Dabagh Vote and a Half', 'Dabagh', 'Vote and a Half'],
    explanation: 'The Dabagh method simply gives 1 point to the first choice and 0.5 points to the second choice. With the rest of the choices getting 0. I know it might feel like cheating, but it\'s technically a positional method too.',
    classifications: [
      'positional' /* 1, 0.5, 0, 0, ..., 0 */
    ],
  },
  binary_positional: {
    names: ['Binary Positional'],
    explanation: 'First choice gets 1 point, second gets 1/2, third gets 1/4, fourth gets 1/8, nth gets 1/(2^n), etc.',
    classifications: [
      'positional' /* 1/(2^i) */
    ],
  },
  /* evaluative block */
  approval: {
    names: ['Approval'],
    explanation: 'Just mark every option you\'d be cool with winning. The candidate with the most marks wins.',
    links: {
      electowiki: 'https://electowiki.org/wiki/Approval_voting',
    }
  },
  disapproval: {
    names: ['Disapproval'],
    explanation: 'Mark every option you do NOT want to win. The candidate with the least negative marks wins.',
    links: {
      electowiki: 'https://electowiki.org/wiki/Disapproval_voting',
    },
  },
  cav: {
    names: ['Combined Approval Voting', 'Combined Approval', 'Balanced Approval', 'Net Approval', 'Dis&Approval', 'Evaluative'],
    explanation: 'Mark every option you\'re cool with positive and every option you definitely aren\'t cool with negative. The candidate with the highest score (total positive marks minus total negative marks) wins.',
    links: {
      wikipedia: 'https://en.wikipedia.org/wiki/Combined_approval_voting',
    }
  },
  score: {
    names: ['Score', 'Range', 'Evaluative', 'Utilitarian', 'The Point System', 'Ratings Summation', 'Average'],
    explanation: 'If you think of Combined Approval as a range letting you mark each candidate -1, 0, or 1, then the logical next step is to extend that range right? Range voting allows voters to mark each candidate (here from 0 to 5) and then add up the marks. The candidate with the highest score wins (you can also use the average score. The result would be the same).',
  },
  range: {
    names: ['Range', '0-99', 'Evaluative', 'Average'],
    explanation: 'I think the logical next step in this series is to just make the scale continuous instead of discrete. You can mark any candidate anywhere between 0 and 100% (including any decimal). The candidate with the highest (again, or average) score wins.',
  },
  /* condorcet block */
  copeland: {
    names: ['Copeland', 'Lull', 'Condorcet', '1/1⁄2/0 Method'],
    explanation: 'To find a "Condorcet winner", you take every candidate and compare them against each other. Count up how many times candidate A is preferred over candidate B. A Condorcet winner is one that wins every such matchup against all the other candidates. A "Condorcet method" is a method that will always elect a Condorcet winner if one exists (it\'s quite common for none to exist). Copeland is one of the simplest to understand Condorcet methods. For a given candidate, it gets 1 point for every other candidate that it beats and half a point for every candidate it ties with. The candidate with the highest of such score wins.',
    links: {
      wikipedia: 'https://en.wikipedia.org/wiki/Copeland%27s_method',
    },
    classifications: ['condorcet'],
  },
  lull: {
    names: ['Lull', '1/1/0 Method'],
    explanation: 'This is almost the same as Copeland except instead of awarding half a point for every tie, you award a full point. Hence why Copeland is sometimes called the \'1/1⁄2/0 method\' and Lull is sometimes called the \'1/1/0 method\'.',
    classifications: ['condorcet'],
  },
  /* cumulative block */
  cumulative: {
    names: ['Cumulative', 'Accumulation', 'Multi', 'Weighted'],
    explanation: 'Each voter gets N (in this case N=10) points to distribute to the candidates however they like. If they only love one candidate, they can give all 10 to that one. If they\'re split between a few options they could give a little bit to each!'
  },
  fractional: {
    names: ['Fractional Cumulative'],
    explanation: 'I think the natural next question to ask about Cumulative Voting is what happens if you give each voter an extremely large amount of points to distribute so that they could be really detailed in their preferences. Eventually you get to the point where you can give each candidate a continuous (rather than discrete) portion of your points. E.g. candidate A gets 33.4% of my points, candidate B gets 22.46%, etc. This is Fractional Cumulative voting.'
  },
  quadratic: {
    names: ['Quadratic'],
    explanation: 'This is a form of cumulative voting that specifically aims to affect voter behavior and encourage them to vote for more than a few candidates. If you want to give a candidate 5 points it\'ll cost you 25 of your points. If you wanna give a candidate 2 points, it\'ll only cost 4. The net effect is that voters who vote for more candidates end up having more voting power so voters are discouraged from putting all their eggs in one basket.',
    links: {
      wikipedia: 'https://en.wikipedia.org/wiki/Quadratic_voting',
      electowiki: 'https://electowiki.org/wiki/Quadratic_voting'
    },
  },
  equal_even: {
    names: ['Equal & Even Cumulative'],
    explanation: 'Each voter\'s budget is split equally amongst all of the candidates they approve of.'
  }
};

export default info;
export { classifications };
