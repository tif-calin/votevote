
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

  // const dist = Math.sqrt(rgbDist * hslDist);
  // const dist = Math.pow(dist, 1 / dist);
  let dist = (rgbDist + hslDist) / 2;
  dist = Math.pow(Math.sqrt(dist) / (1 + Math.exp(-12 * (dist - 0.5))), 0.8);

  // console.debug({
  //   dist: dist.toFixed(3),
  //   [voter]: dict[voter].hex,
  //   [candidate]: dict[candidate].hex,
  //   rgbDist: rgbDist.toFixed(3),
  //   hslDist: hslDist.toFixed(3),
  // })

  return dist;
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
