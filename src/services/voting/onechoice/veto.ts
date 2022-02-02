
const full = (votes: [weight: number, pick: string][]) => {
  return votes.reduce((acc, [weight, pick]) => {
      return { ...acc, [pick]: ~~acc[pick] - weight };
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

const veto = {
  id: 'veto',
  full,
  wins,
  fast
};

export default veto;
