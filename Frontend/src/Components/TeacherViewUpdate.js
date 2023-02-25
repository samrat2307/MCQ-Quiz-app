import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TeacherViewUpdate.css";

function SeeQuestions(props) {
    const [changed, isChanged] = useState(true);
    // console.log("options", props.data.option1);
    const [question, setQuestion] = useState({
        description: props.data.description,
        option1: props.data.option1,
        option2: props.data.option2,
        option3: props.data.option3,
        option4: props.data.option4,
        answer: props.data.answer,
        q_id: props.data.q_id
    });

    function handleUpdate(event) {
        isChanged(false);
    }
    function handleSave(event) {

        axios.patch("http://localhost:5000/questions/" + question.q_id, question)
            .then((res) => {
                console.log("sent res", res.data);
                window.location.reload(true);
            })
            .catch((err) => {
                console.log(err);
            })
        console.log("updated", question);
    }
    function handleDelete(event) {
        axios.delete("http://localhost:5000/questions/" + question.q_id)
            .then((res) => {
                console.log("res delete", res);
                window.location.reload(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (

        <div className="seeQuestionsDiv">
            <textarea

                type="text"
                value={question.description}
                disabled={changed}
                onChange={(event) => {
                    const temp = { ...question };
                    temp.description = event.target.value;
                    setQuestion(temp);
                }}
                name="" id="" cols="100" rows="2"
                className="seeQuestionTextArea"
            />
            <br />
            <input
                type="text"
                disabled={changed}
                value={question.option1} 
                className="seeQuestionInput w-50 text-center"
                onChange={(event) => {
                    const temp = { ...question };
                    temp.option1 = event.target.value;
                    setQuestion(temp);
                }}
            />
            <br />
            <input
                type="text"
                disabled={changed}
                value={question.option2
                }
                className="seeQuestionInput w-50 text-center"
                onChange={(event) => {
                    const temp = { ...question };
                    temp.option2 = event.target.value;
                    setQuestion(temp);
                }}
            />
            <br />
            <input
                type="text"
                disabled={changed}
                value={question.option3}
                className="seeQuestionInput w-50 text-center"
                onChange={(event) => {
                    const temp = { ...question };
                    temp.option3 = event.target.value;
                    setQuestion(temp);
                }}
            />
            <br />
            <input

                type="text"
                disabled={changed}
                value={question.option4}
                className="seeQuestionInput w-50 text-center"
                onChange={(event) => {
                    const temp = { ...question };
                    temp.option4 = event.target.value;
                    setQuestion(temp);
                }}
            />
            <br />
            <input
                type="text"
                disabled={changed}
                value={question.answer}
                className="seeQuestionInput w-50 text-center"
                onChange={(event) => {
                    const temp = { ...question };
                    temp.answer = event.target.value;
                    setQuestion(temp);
                }}
            />
            <br />
            <button className="btn btn-primary my-3" onClick={handleUpdate}>Change</button>
            <br />
            <button className="btn btn-success my-3" onClick={handleSave} >Update</button>
            <br />
            <button className="btn btn-warning my-3" onClick={handleDelete} >Delete</button>
        </div>
    )
}
function TeacherViewUpdate() {
    const [oneQue, setOneQue] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/questions")
            .then((res) => {
                // console.log("Res value", res.data.length);
                for (let i = 0; i < res.data.length; i++) {
                    // console.log("res nick", res.data[i]);
                    setOneQue((arr) => arr.concat(<SeeQuestions data={res.data[i]} />))
                }

            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    return (
        <div>
            <h2 className="text-primary text-center my-3">Update</h2>
            {oneQue}
        </div>
    )
}

export default TeacherViewUpdate;