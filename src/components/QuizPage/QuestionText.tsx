type QuestionTextProps = { question: string };
const QuestionText = ({ question }: QuestionTextProps) => {
  return (
    <>
      <div>{question}</div>
    </>
  );
};

export default QuestionText;
