import SuperElection from './SuperElection2';

const elections = {
  'wikipedia': {
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

describe('SuperElection tests', () => {  
  test('Tennessee example', () => {
    const { candidates, ballots, weights } = elections['wikipedia'];
    const election = new SuperElection(candidates, ballots, weights);
  });
});

export {};
