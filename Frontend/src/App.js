import "./App.css";
import StudentDisplay from "./Components/StudentView/StudentMainView.js";
import Login from "./Components/Login/Login.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllQuizPage from "./Components/StudentView/AllQuizPage";
import Sidebar from "./Components/sidebar/Sidebar";
import Scorecard from "./Components/StudentView/Scorecard";
import TeacherViewNew from "./Components/TeacherViewNew";
import TeacherViewUpdate from "./Components/TeacherViewUpdate";
import StudentMainView from "./Components/StudentView/StudentMainView";


function App() {
  return (
    <div className="container">
      <Sidebar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/quiz/:quiz_id" element={<StudentDisplay />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/AllQuizPage" element={<AllQuizPage />}></Route>
          <Route exact path="/Scorecard" element={<Scorecard />}></Route>
          <Route exact path="/studentHome" element={<StudentMainView/>}></Route>
          <Route exact path="/teacherHome" element={<TeacherViewNew/>}></Route>
          <Route exact path="/update" element={<TeacherViewUpdate/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
