import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import questionData from './questionData';
import './Questionnaire.css';
import { FormDataContext } from './FormDataContext';

const Questionnaire = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setFormData } = useContext(FormDataContext);

  const data = questionData[id];
  const questions = data?.questions || [];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleSelect = (option) => {
    const currentQuestion = questions[current];
    const updatedAnswers = [
      ...answers,
      {
        question: currentQuestion.question,
        response: option.text,
        bullets: currentQuestion.bullets || []
      }
    ];

    setAnswers(updatedAnswers);

    // 🚫 Ineligible
    if (option.eligible === false) {
      return navigate('/ineligible', { state: { note: option.ineligibleNote } });
    }

    // ✅ Special logic for contraception flow
    if (id === 'contraception' && current === 0) {
      if (option.eligible === true) {
        // first or third option → skip second question
        setFormData(prev => ({
          ...prev,
          questionnaire: updatedAnswers
        }));
        return navigate('/booking');
      }

      if (option.eligible === 'followup') {
        return setCurrent(current + 1); // move to Q2
      }
    }

    // ✅ Continue to next Q if exists
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFormData(prev => ({
        ...prev,
        questionnaire: updatedAnswers
      }));
      navigate('/booking');
    }
  };

  const currentQ = questions[current];

  return (
    <div className="question-wrapper">
      <div className="form-progress-bar" style={{ width: '100%' }} />
      <p className="step">Step 3 of 3 <strong>Consultation</strong></p>
      <h2>{data?.header}</h2>

      {current === 0 && data?.intro && (
        <>
          <h3>{data.intro.title}</h3>
          <p>{data.intro.text}</p>
          {data.intro.nhsLink && (
            <a href={data.intro.nhsLink} target="_blank" rel="noreferrer">
              See NHS examples
            </a>
          )}
        </>
      )}

      <h4>{currentQ.question}</h4>

      {currentQ.bullets && (
        <ul>
          {currentQ.bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      <div className="options">
        {currentQ.options.map((option, i) => (
          <button key={i} className="option-btn" onClick={() => handleSelect(option)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questionnaire;
