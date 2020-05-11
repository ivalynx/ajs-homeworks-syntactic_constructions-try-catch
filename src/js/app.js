function isItNumber(quantity) {
  if (parseInt(quantity, 10).toString() !== quantity.toString()) {
    throw new Error('Не является десятичным числом');
  }
  return parseInt(quantity, 10);
}

export default isItNumber;
