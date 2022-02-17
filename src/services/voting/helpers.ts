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
const serializeList = (list: string[]) => [...list].join(',,');

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

/**
 * Convert a scored ballot to its equivalent ranked ballot(s).
 * @param {Object<string, number>} ballot - a scored ballot
 * @returns {[Array.<Array.<string>>, number, number]}
 */
const parseScoredBallot = (
  ballot: { [key: string]: number }
): [Array<Array<string>>, number, number] => {
  // organize the candidates by their scores
  const byScore = Object.keys(ballot).reduce((acc, candidate) => {
    const score = ballot[candidate];

    if (acc[score]) acc[score].push(candidate);
    else acc[score] = [candidate];

    return acc;
  }, {} as { [key: number]: string[] });

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

  return [ballots, highestScore, lowestScore];
};

/**
 * Convert detailed results to simple ones
 * 
 */
const convertDetailedToSimple = (
  detailed: ResultDetailed
): ResultSimple => Object.entries(detailed).reduce((acc, [k, v]) => ({ 
    ...acc, [k]: v.score 
  }), {}
);

export {
  serializeScoredBallot, deserializeScoredBallot,
  serializeList, deserializeList,
  getPermutations,
  parseScoredBallot,
  convertDetailedToSimple,
};
