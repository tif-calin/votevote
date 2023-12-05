import xkcd from './xkcd';

/* 
In abstract, there's two types of datasets:
  1. distance-based
    - both cands and voters are represented as vectors of some number
    - options for how to calculate voter preferences is based on some distance formula
    - e.g. colors based on color space distance
    - e.g. cities based on X,Y coordinate distance
  2. categorical
    - harcoded set of candidates
    - each voter's preferences are hardcoded

In practice, we'll have 4:
  1. color
    - color represented in a few different vector forms: hex, rgb, and hsl (maybe more?)
  2. distance
    - cands/voters have a single vector representation type
    - can still have preference options (e.g. geometric or euclidean distance)
  3. custom::distance
    - user can add new candidates/voters represented as a vector of the right length at any point
  4. custom::categorical
    - hardcode candidates and voter preferences in initial setup
    - user can't create new options after initial setup (only modify inputs)
    - no preference formula since preference values are hardcoded

Other considerations:
 • import/export to csv/json?
 • ability to share an election by url?
*/

const datasets = [
  {
    slug: 'xkcd',
    data: xkcd,
    defaultCandidates: [],
    defaultVoters: [],
    scoringMethods: {
      'rgb': () => 1,
      'hsl': () => 1,
    },
    canAddCustom: false
  }
];

export default datasets;
