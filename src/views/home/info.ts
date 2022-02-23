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
  /* positional block */
  borda: {
    names: ['Borda', 'Borda Count'],
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
    names: ['Eurovision', 'Eurovision Song Contest'],
    explanation: 'Eurovision uses a unique (arbitrary) voting system where the first candidate gets 12 points, the second gets 10, and the next 8 get 8, 7, 6, ..., etc. All others get 0. This voting method is used in the Eurovision Song Contest.',
    classifications: [
      'positional' /* 12, 10, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, ..., 0 */
    ],
  },
  dabagh: {
    names: ['Dabagh', 'Vote and a Half', 'Dabagh Vote and a Half'],
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
  cav: {
    names: ['Combined Approval', 'Balanced Approval', 'Net Approval', 'Dis&Approval', 'Evaluative'],
    explanation: 'Mark every option you\'re cool with positive and every option you definitely aren\'t cool with negative. The candidate with the highest score (total positive marks minus total negative marks) wins.',
    links: {
      wikipedia: 'https://en.wikipedia.org/wiki/Combined_approval_voting',
    }
  }
};

export default info;
export { classifications };
