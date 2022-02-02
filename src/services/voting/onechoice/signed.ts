
type Ballot = [weight: number, pick: string, sign: boolean];

const full = (votes: Ballot[]) => {
  return votes.reduce((acc, [weight, pick, sign]) => {
      return { ...acc, [pick]: ~~acc[pick] + (sign ? 1 : -1) * weight };
    }, {} as { [pick: string]: number }
  );
};

const wins = (round: ReturnType<typeof full>) => {
  const topScore = Math.max(...Object.values(round));
  return Object.keys(round).filter(pick => round[pick] === topScore);
};

const fast = (votes: Ballot[]) => {
  return wins(full(votes));
};

const veto = {
  id: 'signed',
  full,
  wins,
  fast
};

export default veto;
