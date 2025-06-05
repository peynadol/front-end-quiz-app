type OptionCardProps = {
  option: string;
  selectedAnswer: string | null;
  handleOptionClick: (option: string) => void;
};
const OptionCard = ({
  option,
  selectedAnswer,
  handleOptionClick,
}: OptionCardProps) => {
  const isSelected = selectedAnswer === option;

  return (
    <div
      onClick={() => handleOptionClick(option)}
      className={`card w-full bg-base-200 shadow-md cursor-pointer transition-all duration-200 ${
        isSelected ? "ring-2 ring-primary" : "hover:shadow-lg"
      }`}
    >
      <div className="card-body flex items-center justify-center text-lg font-medium py-4">
        {option}
      </div>
    </div>
  );
};

export default OptionCard;
