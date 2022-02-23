type Info = {
  names?: string[];
  explanation?: string;
  visualization?: React.FC;
};

const info: { [methodKey: string]: Info } = {
  /* positional block */
  borda: {
    names: ['Borda', 'Borda Count'],
    explanation: 'Say there\'s 5 candidates. Your first choice gets 4 points, your second choice gets 3, your third gets 2, fourth gets 1, and last choice gets none. This is the Borda count method!',
  },
  nauru: {
    names: ['Nauru', 'Dowdall', 'Harmonic Borda Count'],
    explanation: 'Similar to Borda, but instead of each candidate getting "n-i" points, each candidate gets "1/i" points. So the first choice gets 1, second choice gets 1/2, third gets 1/3, etc. This method is used by the island of Nauru!',
  },
  eurovision: {
    names: ['Eurovision', 'Eurovision Song Contest'],
    explanation: 'Eurovision uses a unique (arbitrary) voting system where the first candidate gets 12 points, the second gets 10, and the next 8 get 8, 7, 6, ..., etc. All others get 0. This voting method is used in the Eurovision Song Contest.',
  },
  dabagh: {
    names: ['Dabagh', 'Vote and a Half', 'Dabagh Vote and a Half'],
    explanation: 'The Dabagh method simply gives 1 point to the first choice and 0.5 points to the second choice. With the rest of the choices getting 0. I know it might feel like cheating, but it\'s technically a positional method too.'
  }
};

export default info;
