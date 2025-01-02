/**
 * Grid matrix for english time
 */
const grid = 'itlisasampm acquarterdc twentyfivex halfstenfto pasterunine onesixthree fourfivetwo eighteleven seventwelve tenseoclock'
  .toUpperCase()
  .split(' ')
  .map((e) => {
    return e.split('');
  });

export default {
  grid,
};
