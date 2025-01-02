import React from 'react'
import './App.css'
import { Row } from './components/Row'
import { ptBR } from './lang/ptBR'

export const App: React.FC = () => {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-fit bg-slate-700 p-4 rounded-sm">
        {ptBR.grid.map((row, i) => (
          <Row key={i} letters={row} x={i} />
        ))}
      </div>
    </div>
  )
}

