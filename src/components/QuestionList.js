import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setQuestions(questions.filter(question => question.id !== id));
    });
  }
  

  return (
    <div>
      <h1>Quiz Admin</h1>
      <QuestionList questions={questions} />
    </div>
  );
}

export default App;
