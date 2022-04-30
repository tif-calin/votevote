import { ResultDetailed, ResultSimple } from './SuperElection';

/**
 * Serialize a scored ballot into a string.
 * @param {Object<string, number>} ballot - a scored ballot
 * @returns {string}
 */
const serializeScoredBallot = (ballot: { [key: string]: number }) => {
  return Object.entries(ballot)
    .sort(([, a], [, b]) => b - a)
    .map(([k, v]) => `${k}::${v}`)
    .join(',,')
  ;
};

/**
 * Deserialize a serialized scored ballot.
 * @param {string} serialized - a serialized scored ballot
 * @returns {Object<string, number>}
 */
const deserializeScoredBallot = (
  serialized: ReturnType<typeof serializeScoredBallot>
): { [key: string]: number } => serialized
  .split(',,')
  .map(s => s.split('::'))
  .reduce((acc, [k, v]) => ({ ...acc, [k]: parseInt(v) }), {})
;

/**
 * Serialize a list.
 * @param {string[]} list - a list of candidates
 * @returns {string}
 */
const serializeList = (list: string[]): string => [...list].join(',,');

/**
 * Deserialize a serialized list.
 * @param {string} serialized - a serialized list
 * @returns {string[]}
 */
const deserializeList = (serialized: string): string[] => 
  serialized.split(',,')
;

/**
 * Get all permutations of a list.
 * @param {string[]} list - a list of candidates
 * @returns {string[][]}
 */
const getPermutations = (arr: string[]): string[][] => {
  if (arr.length <= 1) return [arr];

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const first = arr[i];
    const rest = arr.slice(0, i).concat(arr.slice(i + 1));
    const restPerms = getPermutations(rest);

    for (let perm of restPerms) {
      result.push([first].concat(perm));
    }
  }

  return result;
};

type Ballot = { [key: string]: number };
/**
 * Convert a scored ballot to its equivalent ranked ballot(s).
 * @param {Object<string, number>} ballot - a scored ballot
 * @returns {[Array.<Array.<string>>, number, number]}
 */
const parseScoredBallot = (
  ballot: Ballot
): [Array<Array<string>>, number, number, Ballot, Ballot, Ballot] => {
  let total = 0;
  let totalApproved = 0;
  const proportionalBallot: Ballot = {};
  const approvalBallot: Ballot = {}; // maps scores over 0.5 from 0..1 to -1..1
  const approvalProportionalBallot: Ballot = {};

  // organize the candidates by their scores
  const byScore = Object.keys(ballot).reduce((acc, candidate) => {
    const score = ballot[candidate];
    total += score;
    if (score > 0.5) totalApproved += score;
    approvalBallot[candidate] = Math.max(0, (score * 2) - 1)

    if (acc[score]) acc[score].push(candidate);
    else acc[score] = [candidate];

    return acc;
  }, {} as Record<number, string[]>);

  // get proportional version of ballot
  Object.entries(ballot).forEach(([c, v]) => {
    proportionalBallot[c] = v / total;
    approvalProportionalBallot[c] = totalApproved ? approvalBallot[c] / totalApproved : 0;
  });

  // get list of all scores and sort it
  const scores = Object.keys(byScore).map(s => Number(s)).sort((a, b) => b - a);
  const highestScore = scores[0];
  const lowestScore = scores[scores.length - 1];

  // make an array of arrays with each subarray containing all candidates with that score
  const bigRank = scores.map((score) => byScore[score]);

  // get all possible permutations
  let ballots: string[][] = [[]];
  for (let rank of bigRank) {
    const permutes = getPermutations(rank);
    const newBallots: string[][] = [];

    for (let p of permutes) {
      for (let i = 0; i < ballots.length; i++) {
        const arr = ballots[i];

        newBallots.push([...arr, ...p]);
      }
    }

    ballots = newBallots;
  };

  return [
    ballots, highestScore, lowestScore, 
    proportionalBallot, approvalBallot, approvalProportionalBallot,
  ];
};

/**
 * Convert detailed results to simple ones
 */
const convertDetailedToSimple = (
  detailed: ResultDetailed
): ResultSimple => Object.entries(detailed).reduce(
  (acc, [k, v]) => ({ 
    ...acc, [k]: v.score 
  }), {}
);

/**
 * Convert a simple result to a detailed one
 */
const convertSimpleToDetailed = (
  simple: ResultSimple
): ResultDetailed => Object.entries(simple).reduce(
  (acc, [k, v]) => ({
    ...acc, [k]: { score: v }
  }), {}
);

/**
 * Get the top scoring candidates from a simple result
 */
const getWinnersSimple = (result: ResultSimple): string[] => {
  const maxScore = Math.max(...Object.values(result));
  return Object.keys(result).filter(k => result[k] === maxScore);
};

/**
 * Get the top scoring candidates from a detailed result
 */
const getWinnersDetailed = (result: ResultDetailed): string[] => {
  const maxScore = Math.max(...Object.values(result).map(v => v.score));
  return Object.keys(result).filter(k => result[k].score === maxScore);
};

export {
  serializeScoredBallot, deserializeScoredBallot,
  serializeList, deserializeList,
  getPermutations,
  parseScoredBallot,
  convertDetailedToSimple, convertSimpleToDetailed,
  getWinnersSimple, getWinnersDetailed
};
