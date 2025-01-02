import { LangInterface, LogicLayer } from './index';

/**
 * Grid matrix for portuguese language
 */
const grid = 'ésãoumatrês meioldiadez duaseisetey quatrohnove cincoitonze zmeialnoite horasymenos vintecameia umvquartopm dezoeycinco'
  .toUpperCase()
  .split(' ')
  .map((e) => {
    return e.split('');
  });

// const grid = [
//   ['É', 'S', 'Ã', 'O', 'U', 'M', 'A', 'T', 'R', 'Ê', 'S'],
//   ['M', 'E', 'I', 'O', 'L', 'D', 'I', 'A', 'D', 'E', 'Z'],
//   ['D', 'U', 'A', 'S', 'E', 'I', 'S', 'E', 'T', 'E', 'Y'],
//   ['Q', 'U', 'A', 'T', 'R', 'O', 'H', 'N', 'O', 'V', 'E'],
//   ['C', 'I', 'N', 'C', 'O', 'I', 'T', 'O', 'N', 'Z', 'E'],
//   ['Z', 'M', 'E', 'I', 'A', 'L', 'N', 'O', 'I', 'T', 'E'],
//   ['H', 'O', 'R', 'A', 'S', 'Y', 'M', 'E', 'N', 'O', 'S'],
//   ['V', 'I', 'N', 'T', 'E', 'C', 'A', 'M', 'E', 'I', 'A'],
//   ['U', 'M', 'V', 'Q', 'U', 'A', 'R', 'T', 'O', 'P', 'M'],
//   ['D', 'E', 'Z', 'O', 'E', 'Y', 'C', 'I', 'N', 'C', 'O'],
// ];

/**
 * Hours logic
 */

const hours: LogicLayer = {
  1: [
    { index: 0, indexStart: 0, indexEnd: 0 },
    { index: 0, indexStart: 4, indexEnd: 6 },
  ],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
  12: [],
  13: [],
  14: [],
  15: [],
  16: [],
  17: [],
  18: [],
  19: [],
  20: [],
  21: [],
  22: [],
  23: [],
  24: [],
};

/**
 * Minutes logic
 */

const minutes: LogicLayer = {
  0: [{ index: 6, indexStart: 0, indexEnd: 3 }],
  5: [],
  10: [],
  15: [],
  20: [],
  25: [],
  30: [],
  35: [],
  40: [],
  45: [],
  50: [],
  55: [],
};

export const ptBR: LangInterface = {
  grid,
  logic: {
    hours,
    minutes,
  },
};

