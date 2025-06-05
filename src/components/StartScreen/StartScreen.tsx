import TopicCard from "./TopicCard";
import { useEffect } from "react";

const StartScreen = ({ data, onTopicClick, setCorrectAnswers }) => {
  useEffect(() => {
    setCorrectAnswers(0);
  }, [setCorrectAnswers]);

  return (
    <main className="flex flex-col items-center justify-center gap-8 text-center">
      <h1 className="text-8xl">Frontend Quiz!</h1>
      <p className="text-5xl">Select a topic</p>
      <div>
        {data.topics.map((topic) => {
          return (
            <TopicCard
              key={topic.name}
              topic={topic.name}
              onTopicClick={() => onTopicClick(topic.name)}
            />
          );
        })}
      </div>
    </main>
  );
};

export default StartScreen;
