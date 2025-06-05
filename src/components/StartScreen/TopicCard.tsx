type TopicCardProps = {
  topic: string;
  onTopicClick: () => void;
};
const TopicCard = ({ topic, onTopicClick }: TopicCardProps) => {
  return (
    <div
      onClick={onTopicClick}
      className="m-4 card w-64 bg-base-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      <div className="card-body flex items-center justify-center text-xl font-semibold">
        {topic}
      </div>
    </div>
  );
};

export default TopicCard;
