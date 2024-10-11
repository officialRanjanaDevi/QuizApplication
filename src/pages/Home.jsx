import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
const Home = () => {
  const navigate=useNavigate();
  const startQuiz=()=>{
      navigate('/quiz');
  }  
  return (
    <div className='h-full flex flex-col items-center'>
      <h1 className='text-7xl font-extrabold text-white text-center pt-40'>Welcome to quiz assessment</h1>
      <button onClick={startQuiz} className='px-6 py-3 mt-20 text-xl font-bold text-white'>Start quiz</button>
    </div>
  )
}

export default Home
