import React from "react"
import { Letter } from "../Letter"

export const Row: React.FC<{letters: string[], x: number}> = ({letters, x}) => {

  return (
    <div className="flex flex-row justify-center items-center">
      {letters.map((letter, i) => (
        <Letter key={i} x={x} y={i}>{letter}</Letter>
      ))}
    </div>
  )
}
