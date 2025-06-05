import { useState } from "react";
import QuestionText from "./QuestionText";
import OptionCard from "./OptionCard";
const QuestionScreen = ({ topic, setCorrectAnswers, setCurrentScreen }) => {
  const questions = topic.questions;
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  console.log("Question screen", questions);
  console.log(questions.length - 1);
  console.log(questionNumber);

  const answer = questions[questionNumber].answer;
  console.log("answer", answer);

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    if (selectedAnswer === answer) {
      setCorrectAnswers((prev) => prev + 1);
    }
    if (questionNumber >= questions.length - 1) {
      setQuestionNumber(0);
      setSelectedAnswer(null);
      setCurrentScreen("results");
      return;
    }

    setQuestionNumber(questionNumber + 1);
    setSelectedAnswer(null);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <div className="text-5xl font-bold">
        <QuestionText question={questions[questionNumber].question} />
      </div>

      <p>
        Question {questionNumber + 1} of {questions.length}
      </p>

      <div className="flex flex-col gap-4 mt-4 w-full max-w-md">
        {questions[questionNumber].options.map((option) => (
          <OptionCard
            key={option}
            option={option}
            selectedAnswer={selectedAnswer}
            handleOptionClick={handleOptionClick}
          />
        ))}
      </div>

      <button
        className={`btn btn-primary mt-6 ${
          !selectedAnswer ? "btn-disabled" : ""
        }`}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default QuestionScreen;
