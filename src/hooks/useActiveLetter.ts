import { ActivationLayer } from "../lang";
import { ptBR } from "../lang/ptBR";
import { useTime } from "./useTime";

const getHour = (date: Date): number => {
  const currentHour = date.getHours();
  const shouldSkipHour = date.getMinutes() > 39;
  return shouldSkipHour ? currentHour + 1 : currentHour;
};

/**
 * get minutes in interval of 5
 */
const getMinute = (date: Date): number => {
  return Math.floor(date.getMinutes() / 5) * 5;
};

const isActive = (x: number, y: number, logic: ActivationLayer[], time: Date) => {
  return logic.some((layer) => {
    if (layer.fullHour && getMinute(time) !== 0) return false;
    if (layer.index !== x) return false;
    if (layer.indexStart <= y && layer.indexEnd >= y) return true;
    return false;
  });
};

export const useActiveLetter = (x: number, y: number): boolean => {
  const time = useTime();
  return (
    isActive(x, y, ptBR.logic.hours[getHour(time)], time) ||
    isActive(x, y, ptBR.logic.minutes[getMinute(time)], time)
  );
};
