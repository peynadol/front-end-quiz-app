type ResultsPageProps = {
  setCurrentScreen: React.Dispatch<React.SetStateAction<string>>;
  correctAnswers: number;
};

const ResultsPage = ({
  setCurrentScreen,
  correctAnswers,
}: ResultsPageProps) => {
  const handleRestart = () => {
    setCurrentScreen("start");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <h2 className="text-6xl font-extrabold">
        You scored {correctAnswers} out of 5!
      </h2>

      <button className="btn btn-primary mt-6" onClick={handleRestart}>
        Play Again
      </button>
    </div>
  );
};

export default ResultsPage;
