import { useState } from 'react';
import React from 'react';
import QuizBox from '../components/QuizBox/QuizBox';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';
import ScoreCard from '../components/ScoreCard/ScoreCard';
const Quiz = () => {
  const [data, setData] = useState({});
  const [count,setCount]=useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false); // New loading state

  const handleNext = (num) => {
    setScore((prevScore) => prevScore + num);
    setLoading(true); // Start loading state

    setTimeout(() => {
      handleclick(); 
      setLoading(false); 
    }, 2000);
  };

  const handleclick = async () => {
    if(count<10){
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=multiple');
        const result = await response.json();
        const fetchedData = result.results[0];
        setData(fetchedData); 
        setCount(count+1);
        const allAnswers = [...fetchedData.incorrect_answers];
        const pos = Math.floor(Math.random() * 4);
        allAnswers.splice(pos, 0, fetchedData.correct_answer);
        setAnswers(allAnswers);
  
      } catch (error) {
        console.log(error);
      }
    }
    
  };
  

  return (
    <div className='h-full relative'>
      <h1>Quiz</h1>
      <ScoreBoard score={score} />
      <ScoreCard count={count}/>
      <button onClick={handleclick} disabled={loading}>
        {loading ? 'Loading...' : 'Click for Question'}
      </button>

      {data.question && (
        <QuizBox 
          question={data.question} 
          answers={answers} 
          correct_answer={data.correct_answer} 
          setnext={handleNext} 
        />
      )}
    </div>
  );
}

export default Quiz;
