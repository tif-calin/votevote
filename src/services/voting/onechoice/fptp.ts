
const full = (votes: [weight: number, pick: string][]) => {
  return votes.reduce((acc, [weight, pick]) => {
      return { ...acc, [pick]: ~~acc[pick] + weight };
    }, {} as { [pick: string]: number }
  );
};

const wins = (round: ReturnType<typeof full>) => {
  const topScore = Math.max(...Object.values(round));
  return Object.keys(round).filter(pick => round[pick] === topScore);
};

const fast = (votes: [weight: number, pick: string][]) => {
  return wins(full(votes));
};

// const fast = (votes: [weight: number, pick: string][]) => {
//   const scores: { [pick: string]: number } = {};
//   const majority = Math.floor(votes.length / 2);

  // return votes.reduce((acc, [weight, pick]) => {
  //   scores[pick] = ~~scores[pick] + weight;
  //   if (scores[pick] > majority) return [ pick ];

  //   return scores[acc] > scores[pick] ? acc : pick;
  // }, '' as string);

//   // let topPick = votes[0][1];
//   // for (let i = 0; i < Math.floor(2 * votes.length / 3); i++) {
//   //   const [weight, pick] = votes[i];
//   //   scores[pick] = ~~scores[pick] + weight;
//   //   if (scores[pick] > scores[topPick]) topPick = pick;
//   // }

//   // const majority = Math.floor(votes.length / 2);
//   // if (scores[topPick] > majority) return [topPick];

//   // for (let i = Math.floor(2 * votes.length / 3); i < votes.length; i++) {
//   //   const [weight, pick] = votes[i];
//   //   if (scores[pick]) {
//   //     scores[pick] += weight;
//   //   }
//   // }
// };

const fptp = {
  id: 'fptp',
  full,
  wins,
  fast
};

export default fptp;
