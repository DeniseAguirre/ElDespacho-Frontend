export const priceFormatter = (price: number) => {
  return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
};
