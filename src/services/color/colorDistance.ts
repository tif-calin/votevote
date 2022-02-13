
const hslDistance = (voter: number[], candidate: number[]) => {
  const [H, S, L] = voter;
  const [h, s, l] = candidate;
  const hDist = Math.min(Math.abs(h - H), Math.abs(360 - Math.abs(h - H)));
  const dist = Math.sqrt(Math.pow(hDist, 2) + Math.pow(s - S, 2) + Math.pow(l - L, 2));

  const maxDist = Math.sqrt(Math.pow(180, 2) + 2 * Math.pow(100, 2));

  return (maxDist - dist) / maxDist;
};

const rgbDistance = (voter: number[], candidate: number[]) => {
  const [R, G, B] = voter;
  const [r, g, b] = candidate;
  const dist = Math.sqrt(Math.pow(r - R, 2) + Math.pow(g - G, 2) + Math.pow(b - B, 2));

  const maxDist = Math.sqrt(3 * Math.pow(255, 2));

  return (maxDist - dist) / maxDist;
};

const colorDistance = (voter: string, candidate: string, dict: { [key:string]: { hex: string, rgb: number[], hsl: number[] } }) => {
  const rgbDist = rgbDistance(dict[voter].rgb, dict[candidate].rgb);
  const hslDist = hslDistance(dict[voter].hsl, dict[candidate].hsl);

  const dist = (rgbDist + hslDist) / 2;
  return dist;
  // return Math.pow(dist, 1 / dist);
};

const votersToBallots = (voters: string[], candidates: string[], dict: { [key:string]: { hex: string, rgb: number[], hsl: number[] } }) => {
  const base = candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {});

  return voters.map(v => {
    return candidates.reduce((acc, c) => {
      return { ...acc, [c]: colorDistance(v, c, dict) };
    }, { ...base });
  })
};

export {
  votersToBallots, colorDistance,
  hslDistance, rgbDistance
};
