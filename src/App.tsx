import data from "../data.json";
import QuestionScreen from "./components/QuizPage/QuestionScreen";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import StartScreen from "./components/StartScreen/StartScreen";
import { useState } from "react";

export default function App() {
  const [currentTopic, setCurrentTopic] = useState("html");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentScreen, setCurrentScreen] = useState("start"); //"start", "quiz", "results"
  console.log("Correct answer count:", correctAnswers);

  // extract topic based on currentopic
  const foundTopic = data.topics.find(
    (topic) => topic.name.toLowerCase() === currentTopic
  );

  const onTopicClick = (topicName: string) => {
    setCurrentTopic(topicName.toLowerCase());
    setCurrentScreen("quiz");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="container mx-auto">
        {currentScreen === "start" ? (
          <StartScreen
            data={data}
            onTopicClick={onTopicClick}
            setCorrectAnswers={setCorrectAnswers}
          />
        ) : null}

        {currentScreen === "quiz" && foundTopic ? (
          <QuestionScreen
            topic={foundTopic}
            setCorrectAnswers={setCorrectAnswers}
            setCurrentScreen={setCurrentScreen}
          />
        ) : null}

        {currentScreen === "results" ? (
          <ResultsPage
            setCurrentScreen={setCurrentScreen}
            correctAnswers={correctAnswers}
          />
        ) : null}
      </div>
    </div>
  );
}
