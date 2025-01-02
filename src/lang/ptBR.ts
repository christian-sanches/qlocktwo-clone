import { ActivationLayer, LangInterface, LogicLayer } from './index';

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

const h = {
  E: { index: 0, indexStart: 0, indexEnd: 0 },
  SAO: { index: 0 , indexStart: 1, indexEnd: 3 },
  UMA: { index: 0, indexStart: 4, indexEnd: 6 },
  DUAS: { index: 2, indexStart: 0, indexEnd: 3 },
  TRES: { index: 0, indexStart: 7, indexEnd: 10 },
  QUATRO: { index: 3, indexStart: 0, indexEnd: 5 },
  CINCO: { index: 4, indexStart: 0, indexEnd: 4 },
  SEIS: { index: 2, indexStart: 3, indexEnd: 6 },
  SETE: { index: 2, indexStart: 6, indexEnd: 10 },
  OITO: { index: 4, indexStart: 4, indexEnd: 7 },
  NOVE: { index: 3, indexStart: 7, indexEnd: 10 },
  DEZ: { index: 1, indexStart: 8, indexEnd: 10 },
  ONZE: { index: 4, indexStart: 7, indexEnd: 10 },
  MEIA: { index: 5, indexStart: 1, indexEnd: 4 },
  MEIO: { index: 1, indexStart: 0, indexEnd: 3 },
  DIA: { index: 1, indexStart: 5, indexEnd: 7 },
  NOITE: { index: 5, indexStart: 6, indexEnd: 10 },
  HORA: { index: 6, indexStart: 0, indexEnd: 3 },
  HORAS: { index: 6, indexStart: 0, indexEnd: 4 },
} satisfies { [x: string]: ActivationLayer; }

/**
 * Hours logic
 */

const hours: LogicLayer = {
  1: [h.E,h.UMA,h.HORA,],
  2: [h.SAO,h.DUAS, h.HORAS],
  3: [h.SAO,h.TRES, h.HORAS],
  4: [h.SAO,h.QUATRO, h.HORAS],
  5: [h.SAO,h.CINCO, h.HORAS],
  6: [h.SAO,h.SEIS, h.HORAS],
  7: [h.SAO,h.SETE, h.HORAS],
  8: [h.SAO,h.OITO, h.HORAS],
  9: [h.SAO,h.NOVE, h.HORAS],
  10: [h.SAO,h.DEZ, h.HORAS],
  11: [h.SAO,h.ONZE, h.HORAS],
  12: [h.E,h.MEIO,h.DIA],
  13: [h.E,h.UMA,h.HORA],
  14: [h.SAO,h.DUAS, h.HORAS],
  15: [h.SAO,h.TRES, h.HORAS],
  16: [h.SAO,h.QUATRO, h.HORAS],
  17: [h.SAO,h.CINCO, h.HORAS],
  18: [h.SAO,h.SEIS, h.HORAS],
  19: [h.SAO,h.SETE, h.HORAS],
  20: [h.SAO,h.OITO, h.HORAS],
  21: [h.SAO,h.NOVE, h.HORAS],
  22: [h.SAO,h.DEZ, h.HORAS],
  23: [h.SAO,h.ONZE, h.HORAS],
  24: [h.E,h.MEIA,h.NOITE],
};

const m = {
  E: { index: 6, indexStart: 7, indexEnd: 7 },
  CINCO: { index: 9, indexStart: 6, indexEnd: 10 },
  DEZ: { index: 9, indexStart: 0, indexEnd: 2 },
  UM: { index: 8, indexStart: 0, indexEnd: 1 },
  QUARTO: { index: 8, indexStart: 3, indexEnd: 8 },
  VINTE: { index: 7, indexStart: 0, indexEnd: 4 },
  MEIA: { index: 7, indexStart: 7, indexEnd: 10 },
  MENOS: { index: 6, indexStart: 6, indexEnd: 10 },
  E_2: { index: 9, indexStart: 4, indexEnd: 4 },
} satisfies { [x: string]: ActivationLayer; }
/**
 * Minutes logic
 */

const minutes: LogicLayer = {
  0: [],
  5: [m.E_2, m.CINCO],
  10: [m.E, m.DEZ],
  15: [m.E, m.UM, m.QUARTO],
  20: [m.E, m.VINTE],
  25: [m.E, m.VINTE, m.E_2, m.CINCO],
  30: [m.E, m.MEIA],
  35: [m.E, m.MEIA, m.E_2, m.CINCO],
  40: [m.MENOS, m.VINTE],
  45: [m.MENOS, m.UM, m.QUARTO],
  50: [m.MENOS, m.DEZ],
  55: [m.MENOS, m.CINCO],
};

export const ptBR: LangInterface = {
  grid,
  logic: {
    hours,
    minutes,
  },
};

