import SuperElection from './SuperElection2';

const elections = {
  'tennessee': {
    candidates: [
      'Memphis',
      'Nashville',
      'Knoxville',
      'Chattanooga',
    ],
    ballots: [
      { 
        'Memphis': 1,
        'Nashville': 0.4,
        'Knoxville': 0.2,
        'Chattanooga': 0,
      },
      {
        'Memphis': 0,
        'Nashville': 1,
        'Knoxville': 0.4,
        'Chattanooga': 0.2,
      },
      {
        'Memphis': 0,
        'Nashville': 0.5,
        'Knoxville': 0.7,
        'Chattanooga': 1,
      },
      {
        'Memphis': 0,
        'Nashville': 0.6,
        'Knoxville': 1,
        'Chattanooga': 0.6,
      }
    ],
    weights: [ 42, 26, 15, 17 ],
  }
};

describe('fptp tests', () => {  
  test('tennessee example', () => {
    const { candidates, ballots, weights } = elections['tennessee'];
    const election = new SuperElection(candidates, ballots, weights);

    const fptp = election.fptp();
    const fptpHighScore = Math.max(...Object.values(fptp));
    const fptpWinners = Object.keys(fptp).filter(c => fptp[c] === fptpHighScore);

    expect(fptpWinners).toEqual(['Memphis']);
  });
});

describe('veto tests', () => {  
  test('tennessee example', () => {
    const { candidates, ballots, weights } = elections['tennessee'];
    const election = new SuperElection(candidates, ballots, weights);

    const veto = election.veto();
    const vetoHighScore = Math.max(...Object.values(veto));
    const vetoWinners = new Set(Object.keys(veto).filter(c => veto[c] === vetoHighScore));

    expect(vetoWinners).toEqual(new Set(['Nashville', 'Knoxville']));
  });
});

export {};
