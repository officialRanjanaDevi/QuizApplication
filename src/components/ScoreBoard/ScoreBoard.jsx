import React from 'react'
import Counter from '../Counter/Counter'
const ScoreBoard = ({score,solved,timmer}) => {
  
  return (
    <div className='flex md:flex-row flex-col justify-evenly h-fit md:h-20 w-5/6 rounded-xl mb-10  bg-neutral-100 text-purple-300 sm:text-md md:text-lg lg:text-2xl font-black text-center py-5'>
        <div>Total Questions- <span className='text-purple-400 opacity-90'>10</span></div>
        <div>Solved: <span className='text-purple-400 opacity-90'>{solved-1}</span></div>
      <div>Score: <span className='text-purple-400 opacity-90'>{score}/10</span></div>
      <div className='flex justify-center'>CountDown&nbsp; <Counter timmer={{timmer}}/></div>
    </div>
  )
}

export default ScoreBoard
