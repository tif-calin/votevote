
/**
 * Convert hex string to rgb integer array
 * @param {string} hex - of the form #RRGGBB
 * @returns {[number, number, number]} - of the form [r, g, b]
 */
const hex2rgb: (hex: string) => number[] = hex => (/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) as string[]).map(str => parseInt(str, 16)).slice(1);

/** Converts RGB to hex string
 * @param {Array.<number> | string} rgb - Either as an array of numbers or string of the form 'rgb(r, g, b)'
 * @returns {string} hex
 */
const rgb2hex = (rgb: number[] | string) => typeof rgb === 'string'
  ? `#${(rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/) as string[]).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
  : `#${rgb.map(n => n.toString(16).padStart(2, '0')).join('')}`
;

/**
 * converts from RGB to HSL
 * @param {Array.<number>} rgb [red, green, blue]
 * @param {boolean} [toIntegers=false] whether or not to round to nearest integer or leave as floats
 * @returns {Array.<number>} [hue, saturation, lightness]
 */
const rgb2hsl = (rgb: number[], toIntegers = true) => {
  const rgbNorm = rgb.map(c => c /= 255);
  const max = Math.max(...rgbNorm);
  const min = Math.min(...rgbNorm);
  const dif = max - min;
  const ind = rgbNorm.indexOf(max);

  let h, s, l = (max + min) / 2;
  if (dif) {
    s = dif / (1 - Math.abs(2 * l - 1));
    h = 60 * ((2 * ind) + (rgbNorm[(ind + 1) % 3] - rgbNorm[(ind + 2) % 3]) / dif);
    h = (h + 360) % 360; // make sure not negative
  } else h = s = 0;

  return (toIntegers 
    ? [h, s, l].map((c, i) => Math.round(c * (i ? 100 : 1)))
    : [h, s, l]
  ).map((c, i) => i ? Math.max(0, c) : c % 360);
};

const hex2hsl = (hex: string) => rgb2hsl(hex2rgb(hex));

export {
  hex2rgb,
  rgb2hex,
  rgb2hsl,
  hex2hsl
};
