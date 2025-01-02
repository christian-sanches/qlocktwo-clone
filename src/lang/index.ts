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
  fullHour?: boolean; /** if full hour, display 'hours' */
}

export interface LogicLayer {
  [key: string]: ActivationLayer[];
}
