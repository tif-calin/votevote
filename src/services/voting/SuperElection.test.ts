import SuperElection from './SuperElection';

const ELECTION_EXAMPLES = {
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
  rgbRainbow: {
    candidates: [ 'red', 'green', 'blue' ],
    ballots: [
      { 'red': 1, 'green': 0, 'blue': 0 },        // red
      { 'red': 1, 'green': 0.65, 'blue': 0 },     // orange
      { 'red': 1, 'green': 1, 'blue': 0 },        // yellow
      { 'red': 0, 'green': 1, 'blue': 0 },        // green
      { 'red': 0, 'green': 0, 'blue': 1 },        // blue
      { 'red': 0.3, 'green': 0, 'blue': 0.5 },    // indigo
      { 'red': 0.9, 'green': 0.5, 'blue': 0.9 },  // violet
    ],
    weights: [ 1, 1, 1, 1, 1, 1, 1 ],
  },
  /** https://arxiv.org/pdf/1911.06226.pdf */
  baldigaGreen2013: {
    candidates: ['c1', 'c2', 'c3'],
    ballots: [
      {c1: 1, c2: 0.5, c3: 0 },
      {c3: 1, c2: 0.5, c1: 0 },
      {c2: 1, c3: 0.5, c1: 0 },
    ],
    weights: [49, 48, 3]
  }
};

describe('fptp tests', () => {
  test('tennessee example', () => {
    const { candidates, ballots, weights } = ELECTION_EXAMPLES['tennessee'];
    const election = new SuperElection(candidates, ballots, weights);

    const fptp = election.fptp();
    const fptpHighScore = Math.max(...Object.values(fptp));
    const fptpWinners = Object.keys(fptp).filter(c => fptp[c] === fptpHighScore);

    expect(fptpWinners).toEqual(['Memphis']);
  });

  test('rgbRainbow example', () => {
    const { candidates, ballots, weights } = ELECTION_EXAMPLES['rgbRainbow'];
    const election = new SuperElection(candidates, ballots, weights);

    const fptp = election.fptp();
    const fptpHighScore = Math.max(...Object.values(fptp));
    const fptpWinners = Object.keys(fptp).filter(c => fptp[c] === fptpHighScore);

    expect(fptpWinners).toEqual(['red']);
  });
});

describe('veto tests', () => {
  test('tennessee example', () => {
    const { candidates, ballots, weights } = ELECTION_EXAMPLES['tennessee'];
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
    const { candidates, ballots, weights } = ELECTION_EXAMPLES['tennessee'];
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
    const { candidates, ballots, weights } = ELECTION_EXAMPLES['tennessee'];
    const election = new SuperElection(candidates, ballots, weights);

    const irv = election.irv();
    const irvHighScore = Math.max(...Object.values(irv.at(-1) || {}));
    const irvWinners = candidates
      .filter(c => irv.at(-1)?.[c] === irvHighScore)
    ;

    expect(irvWinners).toEqual(['Knoxville']);
  });
});

describe('kemeny_young tests', () => {
  test('tennessee example', () => {
    const candidates = ELECTION_EXAMPLES['tennessee'].candidates;
    const ballots = [
      ['Memphis', 'Nashville', 'Chattanooga', 'Knoxville'],
      ['Nashville', 'Chattanooga', 'Knoxville', 'Memphis'],
      ['Chattanooga', 'Knoxville', 'Nashville', 'Memphis'],
      ['Knoxville', 'Chattanooga', 'Nashville', 'Memphis'],
    ].map(ranking => Object.fromEntries(ranking.map((c, i) => [c, ((4-i) / 4)])))
    const weights = ELECTION_EXAMPLES['tennessee'].weights;

    const election = new SuperElection(candidates, ballots, weights);

    const { winners } = election.kemeny_young();

    expect(winners).toEqual(['Nashville']);
  });

  // https://en.wikipedia.org/wiki/Kemeny%E2%80%93Young_method#Description
  test('Wikipedia example', () => {
    const candidates = ['Elliot', 'Meredith', 'Roland', 'Selden'];
    const ballots = [{ Elliot: 1, Roland: 0.6, Meredith: 0.25, Seldon: 0.25 }];
    const election = new SuperElection(candidates, ballots, [1]);

    const { winners } = election.kemeny_young();

    expect(winners).toEqual(['Elliot']);
  });

  // https://arxiv.org/pdf/1911.06226.pdf
  test('gilbert2022', () => {
    const { candidates, ballots, weights } = ELECTION_EXAMPLES['baldigaGreen2013'];
    const election = new SuperElection(candidates, ballots, weights);

    const { winners } = election.kemeny_young();

    expect(winners).toEqual(['c2']);
  });
});

export {};
