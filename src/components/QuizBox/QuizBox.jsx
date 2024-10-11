import React, { useState } from 'react';

const QuizBox = ({ question, answers, correct_answer, setnext }) => {
    
   
    const checkAnswer = (answer) => {
        if (answer === correct_answer) {
            setnext(1)
        } else {
            setnext(0)
            
        }   
       
    }

    return (
        <div>
            <h1>{question}</h1>
            <h2>Correct Answer: {correct_answer}</h2>
            <h2>Incorrect Answers:</h2>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index} onClick={() => checkAnswer(answer)}>{answer}</li>
                ))}
            </ul>
        </div>
    );
}

export default QuizBox;
