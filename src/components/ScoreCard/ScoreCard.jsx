import React from 'react'

const ScoreCard = ({count}) => {
  return (
    <div className="absolute  border-2 border-black w-40 h-40 " style={{top:"40%" ,left:"40%", display:count===10?"":"none"}}>
      hello
    </div>
  )
}

export default ScoreCard
