import cs from 'classnames';
import React, { PropsWithChildren } from "react";
import { useActiveLetter } from '../../hooks/useActiveLetter';

export const Letter: React.FC<PropsWithChildren<{ x: number; y: number; }>> = ({ children, x, y }) => {
  const active = useActiveLetter(x, y)

  return (
    <span className={cs(
      "size-14 text-center font-mono font-bold font-stencil text-4xl",
      "transition-opacity",
      "select-none",
      active && "drop-shadow-[1px_1px_7px_rgba(255,255,255,0.8)]",
      !active && "opacity-20"
    )}
    >
      {children}
    </span>
  )
}