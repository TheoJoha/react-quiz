/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable array-callback-return */
import {AnswerObject} from "../App"
import React from "react"
import {Wrapper, ButtonWrapper} from "./QuestionCard.styles"

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
<Wrapper>
    <p className="number">
    Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question}} />
    <div>
        // eslint-disable-next-line array-callback-return
        {answers.map((answer) => (
            <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            >
                <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: question}} />
                </button>
            </ButtonWrapper>
        ))}
    </div>
</Wrapper>);

export default QuestionCard;
