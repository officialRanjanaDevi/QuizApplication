import React from 'react'

const ScoreCard = ({count}) => {
  return (
    <div className="absolute text-center  w-1/3 rounded-xl h-40 bg-neutral-100 p-4" style={{top:"40%" ,left:"35%", display:count===10?"":"none"}}>
       <h1 className='text-2xl font-black text-purple-400'>YOUR SCORE CARD</h1>
       <h1 className='font-bold text-lg my-2'>
         Correct answers: <span className='font-black text-2xl text-purple-400'>4</span>
       </h1>
       <h1 className='font-bold text-lg my-2'>
         Incorrect answers: <span className='font-black text-2xl text-purple-400'>6</span>
       </h1>
    </div>
  )
}

export default ScoreCard
