import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./StudentMainView.css";

function StudentDisplay() {
  const navigate = useNavigate();
  const [correctCount, setCorrectCount] = useState(0);
  const [allQuestionOfQuiz, setAllQuestionsOfQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [questionCounter, setQuestionCounter] = useState(0);
  const [totalNoOfQuestions, setTotalNoOfQuestions] = useState(0);
  const [currSelectedOption, setCurrSelectedOption] = useState("");
  const [answerSheet, setAnswerSheet] = useState([]);
  const { quiz_id } = useParams();
  const { state } = useLocation();

  console.log(state);

  useEffect(() => {
    axios
      .get("http://localhost:5000/questions/quizId/" + quiz_id)
      .then((res) => {
        console.log("Res", res.data);
        setAllQuestionsOfQuiz(res.data);
        setTotalNoOfQuestions(res.data.length);
        if (res.data.length > 0) setCurrentQuestion(res.data[questionCounter]);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);

  return (
    <div className="mainContainer">
      <button
        className="btn btn-success w-25 fr mx-2"
        onClick={() =>
          navigate("/Scorecard", {
            state: {
              answerSheet: answerSheet,
              user_id: state.user_id,
            },
          })
        }
      >
        End Test
      </button>
      <br />
      <br />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let selectAns = event.target.options.value;
          console.log(event.target.options.value, currentQuestion.answer);
          if (selectAns === currentQuestion.answer) {
            setCorrectCount(correctCount + 1);
          }
        }}
      >
        <label>Question No : </label>
        <input type="text" disabled={true} value={questionCounter + 1}></input>
        <br />
        <br />
        <label>Question : </label>
        <input
          className="w-75"
          type="text"
          disabled={true}
          value={currentQuestion.description}
        ></input>
        <br />
        <br />
        <input
          className="text-center"
          type="radio"
          name="options"
          value="1"
          onChange={() => setCurrSelectedOption("1")}
        ></input>
        <label> 1) </label>
        <input
          className="text-center"
          type="text"
          disabled={true}
          value={currentQuestion.option1}
        ></input>
        <br />
        <br />
        <input
          className="text-center"
          type="radio"
          name="options"
          value="2"
          onChange={() => setCurrSelectedOption("2")}
        ></input>
        <label> 2) </label>
        <input
          className="text-center"
          type="text"
          disabled={true}
          value={currentQuestion.option2}
        ></input>
        <br />
        <br />
        <input
          className="text-center"
          type="radio"
          name="options"
          value="3"
          onChange={() => setCurrSelectedOption("3")}
        ></input>
        <label> 3) </label>
        <input
          className="text-center"
          type="text"
          disabled={true}
          value={currentQuestion.option3}
        ></input>
        <br />
        <br />
        <input
          className="text-center"
          type="radio"
          name="options"
          value="4"
          onChange={() => setCurrSelectedOption("4")}
        ></input>
        <label> 4) </label>
        <input
          className="text-center"
          type="text"
          disabled={true}
          value={currentQuestion.option4}
        ></input>
        <br />
        <br />

        <button
          className="wd-10 btn btn-warning mx-3"
          onClick={() => {
            console.log("Pressed prev button");
            if (questionCounter - 1 >= 0) {
              console.log("In if");
              let no = questionCounter - 1;
              setQuestionCounter(no);
              console.log("This", allQuestionOfQuiz[no]);
              setCurrentQuestion(allQuestionOfQuiz[no]);
            }
          }}
        >
          Previous
        </button>
        <button
          className="wd-10 btn btn-danger"
          // type="submit"
          onClick={(event) => {
            event.preventDefault();
            // let selectAns = event.target.options.value;
            console.log(currSelectedOption, currentQuestion.answer);
            let i = 0;
            const newAnswerSheet = [...answerSheet];

            for (i = 0; i < newAnswerSheet.length; i++) {
              if (newAnswerSheet[i].q_id === currentQuestion.q_id) {
                newAnswerSheet[i].answer = currSelectedOption;
                break;
              }
            }
            if (i === newAnswerSheet.length)
              setAnswerSheet(
                answerSheet.concat({
                  q_id: currentQuestion.q_id,
                  answer: currSelectedOption,
                })
              );
            else {
              setAnswerSheet(newAnswerSheet);
            }
            setCorrectCount(correctCount + 1);
          }}
        >
          Submit
        </button>
        <button
          className="wd-10 btn btn-warning mx-3"
          onClick={() => {
            console.log("Pressed next button");
            if (questionCounter + 1 < totalNoOfQuestions) {
              console.log("In if");
              let no = questionCounter + 1;
              setQuestionCounter(no);
              console.log("This", allQuestionOfQuiz[no]);
              setCurrentQuestion(allQuestionOfQuiz[no]);
            }
          }}
        >
          Next
        </button>
      </form>
      <h1>{correctCount}</h1>
      {answerSheet.map((e) => {
        return (
          <>
            <p className="text-dark">
              Question : {e.q_id} Answer : {e.answer}
            </p>
          </>
        );
      })}
    </div>
  );
}

export default StudentDisplay;
