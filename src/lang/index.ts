export interface LangInterface {
  grid: string[][];
  logic: {
    hours: LogicLayer;
    minutes: LogicLayer;
  };
}

export interface ActivationLayer {
  index: number /** Grid row index */;
  indexStart: number /** Grid column index start */;
  indexEnd: number /** Grid column index end */;
  addPluralHour?: boolean /** If set to true, this activation layer should only be on if its a full hour and its name is plural */;
  stopFullHour?: boolean /** If set to true, this activation layer should be the last one to be rendered at this time */;
}

export interface LogicLayer {
  [key: string]: ActivationLayer[];
}
