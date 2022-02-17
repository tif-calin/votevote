import SuperElection from './SuperElection';

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
  },
  'rgb_rainbow': {
    candidates: [ 'red', 'green', 'blue' ],
    ballots: [
      { 'red': 1, 'green': 0, 'blue': 0 },    // red
      { 'red': 1, 'green': 0.65, 'blue': 0 }, // orange
      { 'red': 1, 'green': 1, 'blue': 0 },    // yellow
      { 'red': 0, 'green': 1, 'blue': 0 },    // green
      { 'red': 0, 'green': 0, 'blue': 1 },    // blue
      { 'red': 0.3, 'green': 0, 'blue': 0.5 },    // indigo
      { 'red': 0.9, 'green': 0.5, 'blue': 0.9 },  // violet
    ],
    weights: [ 1, 1, 1, 1, 1, 1, 1 ],
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

  test('rgb_rainbow example', () => {
    const { candidates, ballots, weights } = elections['rgb_rainbow'];
    const election = new SuperElection(candidates, ballots, weights);

    const fptp = election.fptp();
    const fptpHighScore = Math.max(...Object.values(fptp));
    const fptpWinners = Object.keys(fptp).filter(c => fptp[c] === fptpHighScore);

    expect(fptpWinners).toEqual(['red']);
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

describe.skip('signed tests', () => {});

describe('vfa tests', () => {
  test('tennessee example', () => {
    const { candidates, ballots, weights } = elections['tennessee'];
    const election = new SuperElection(candidates, ballots, weights);

    const vfa = election.vfa();
    const vfaHighScore = Math.max(
      ...Object.values(vfa).map(v => v.score)
    );
    const vfaWinners = Object.keys(vfa)
      .filter(c => vfa[c].score === vfaHighScore)
    ;

    expect(vfaWinners).toEqual(['Nashville']);
  });
});

describe('irv tests', () => {
  test('tennessee example', () => {
    const { candidates, ballots, weights } = elections['tennessee'];
    const election = new SuperElection(candidates, ballots, weights);

    const irv = election.irv();
    const irvHighScore = Math.max(...Object.values(irv.at(-1) || {}));
    const irvWinners = candidates
      .filter(c => irv.at(-1)?.[c] === irvHighScore)
    ;

    expect(irvWinners).toEqual(['Knoxville']);
  });
});

export {};
