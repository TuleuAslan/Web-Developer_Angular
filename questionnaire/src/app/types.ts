export interface IQuestion {
  text: string;
  type: string;
  answers: string[];
}

export interface IResult {
  questionIndex: number;
  answerIndexes: number[];
  questionType: string;
}
