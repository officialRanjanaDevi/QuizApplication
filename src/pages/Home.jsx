import React from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
  const startQuiz=()=>{
      navigate('/quiz');
  }  
  return (
    <div className='h-full'>
      <h1>Welcome to quiz assessment</h1>
      <button onClick={startQuiz}>Start quiz</button>
    </div>
  )
}

export default Home
