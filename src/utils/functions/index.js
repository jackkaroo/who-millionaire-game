export const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const reverseData = (data) => {
  const newData = data.map((el) => el.gain);
  return newData.reverse();
};
