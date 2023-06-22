export const numberFormatter = (num: number) => {
  if (Math.abs(num) > 999 && Math.abs(num) < 999999) {
    return `${Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1))}K`;
  } else if (Math.abs(num) > 999999) {
    return `${Math.sign(num) * Number((Math.abs(num) / 1000000).toFixed(1))}M`;
  } else return Math.sign(num) * Math.abs(num);
};
