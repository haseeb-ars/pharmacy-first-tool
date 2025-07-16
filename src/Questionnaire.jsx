import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import questionData from './questionData';

const Questionnaire = () => {
  const { id } = useParams(); // condition id from route
  const navigate = useNavigate();
  const questions = questionData[id] || []; // get condition-specific questions

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    if (!answer.eligible) {
      navigate('/ineligible');
    } else {
      setAnswers([...answers, answer]);
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        navigate('/booking');
      }
    }
  };

  return (
    <div className="questionnaire-container">
      <h2>{questions[current].question}</h2>
      {questions[current].options.map((option, idx) => (
        <button key={idx} onClick={() => handleAnswer(option)}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Questionnaire;
