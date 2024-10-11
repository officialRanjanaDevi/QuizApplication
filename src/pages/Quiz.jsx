import { useState } from "react";
import React from "react";
import LoadingBox from "../components/QuizBox/LoadingBox";
import QuizBox from "../components/QuizBox/QuizBox";
import ScoreBoard from "../components/ScoreBoard/ScoreBoard";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import "./Style.css";


const Quiz = () => {
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(""); 
   const [timmer,setTimmer]=useState(false);
  const handleNext = (num) => {
    setScore((prevScore) => prevScore + num);
    setLoading(true); 
    setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 2000);
  };
 const fetchData =async()=>{
  if (count < 10) {
    setLoading(false);
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=multiple"
      );
      const result = await response.json();
      const fetchedData = result.results[0];
      setData(fetchedData);
      setCount(count + 1);
      const allAnswers = [...fetchedData.incorrect_answers];
      const pos = Math.floor(Math.random() * 4);
      allAnswers.splice(pos, 0, fetchedData.correct_answer);
      setAnswers(allAnswers);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }else{
    setCount(0);
    setTimmer(false);
  }
 }
  const handleclick = async () => {
     fetchData();
     setTimmer(true);
  };

  return (
    <div className="h-full relative flex flex-col items-center ">
        <h1 className="text-5xl font-black text-neutral-100 text-center py-4">
          QUIZ
        </h1>
       
        <ScoreBoard score={score} solved={count} timmer={true}/>
        <ScoreCard count={count} />
        <button
          className="neu-button "
          onClick={handleclick}
          disabled={loading}
          style={{display:count>0?"none":""}}
        >
         Start
        </button>

      {loading && (
        <QuizBox
          question={data.question}
          answers={answers}
          correct_answer={data.correct_answer}
          setnext={handleNext}
        />
      )}
      {
        (count>0&&!loading) &&  <LoadingBox/>
      }
       
     
    </div>
  );
};

export default Quiz;