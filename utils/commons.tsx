/**
 * numberFormat
 * @param value number
 * @usage numberFormat(2300);
 */

export const numberFormat = (value: number): string =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

/**
 * abbreviateNumber
 * @param val is a value of price
 * @usage abbreviateNumber(32000)
 */
export function abbreviateNumber(val: number): string {
  const SI_SYMBOL = ['', 'rb', 'jt', 'M', 'T'];
  const tier = (Math.log10(Math.abs(val)) / 3) | 0;

  if (tier === 0) return val.toString();

  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = val / scale;

  // format number and add suffix
  return `${scaled.toFixed(1)} ${suffix}`;
}
