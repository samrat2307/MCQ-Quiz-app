import axios from "axios";
import React, { useState } from "react";
import "./TeacherViewNew.css";
function TeacherViewNew() {
    const [finalData, setFinalData] = useState({
        description: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
        author: "teacher",
        quiz_id: "101"

    });
    function handleClick(event) {
        event.preventDefault();
        axios
            .post("http://localhost:5000/questions", finalData)
            .then((res) => {
                console.log("res", res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <h2 className="container text-primary text-center my-3">Add questions to Quiz</h2>
            <div className="TeacherView">
                <h3 className="text-warning text-center my-2">Enter Question </h3>
                <textarea
                    className="teacherTextArea"
                    name="" id=""
                    cols="100"
                    rows="2"
                    onChange={(event) => {
                        const temp = { ...finalData };
                        temp.description = event.target.value;
                        setFinalData(temp);
                    }}
                ></textarea>
                <br />
                <br />
                <input
                    className="w-50 p-2 teacherInput"
                    type="text"
                    placeholder="Option 1"
                    onChange={(event) => {
                        const temp = { ...finalData };
                        temp.option1 = event.target.value;
                        setFinalData(temp);
                    }}
                />
                <br />
                <input
                    className="w-50 p-2 teacherInput"
                    type="text"
                    placeholder="Option 2"
                    onChange={(event) => {
                        const temp = { ...finalData };
                        temp.option2 = event.target.value;
                        setFinalData(temp);
                    }}
                />
                <br />
                <input
                    className="w-50 p-2 teacherInput"
                    type="text"
                    placeholder="Option 3"
                    onChange={(event) => {
                        const temp = { ...finalData };
                        temp.option3 = event.target.value;
                        setFinalData(temp);
                    }}
                />
                <br />
                <input
                    className="w-50 p-2 teacherInput"
                    type="text"
                    placeholder="Option 4"
                    onChange={(event) => {
                        const temp = { ...finalData };
                        temp.option4 = event.target.value;
                        setFinalData(temp);
                    }}
                />
                <br />
                <input
                    className="w-50 p-2 teacherInput"
                    type="text"
                    placeholder="Enter answer(option number)"
                    onChange={(event) => {
                        const temp = { ...finalData };
                        temp.answer = event.target.value;
                        setFinalData(temp);
                    }}
                />
                <br />
                <button className="w-25 btn btn-success text-light my-3" onClick={handleClick}>Add</button>
            </div>
        </div >
    )
}

export default TeacherViewNew;