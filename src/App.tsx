import cs from 'classnames'
import React, { PropsWithChildren } from 'react'
import './App.css'
import { ptBR } from './lang/ptBR'

const Row: React.FC<{letters: string[], rowIndex: number}> = ({letters, rowIndex}) => {

  return (
    <div className="flex flex-row justify-center items-center">
      {letters.map((letter, i) => (
        <Letter key={i} active={rowIndex === 1}>{letter}</Letter>
      ))}
    </div>
  )
}

const Letter: React.FC<PropsWithChildren<{active?: boolean }>> = ({ children, active }) => {
  return (
    <span className={cs(
      "size-14 text-center font-mono font-bold font-stencil text-4xl",
      !active && "opacity-30"
    )}>
      {children}
    </span>
  )
}

export const App: React.FC = () => {

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {ptBR.grid.map((row, i) => (
          <Row key={i} letters={row} rowIndex={i} />
        ))}
      </div>
    </>
  )
}

