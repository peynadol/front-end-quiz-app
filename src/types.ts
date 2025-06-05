export type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type Topic = {
  name: string;
  questions: Question[];
};

export type TopicsData = {
  topics: Topic[];
};
