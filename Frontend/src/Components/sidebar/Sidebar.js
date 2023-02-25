import { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        class="w3-sidebar w3-bar-block w3-border-right"
        style={{ display: isOpen ? "block" : "none" }}
        id="mySidebar"
      >
        <button
          onClick={() => {
            console.log("closed");
            setIsOpen(false);
          }}
          class="w3-bar-item w3-large"
        >
          Close &times;
        </button>
        <a href="/AllQuizPage" class="w3-bar-item w3-button">
          Select a quiz
        </a>
      </div>

      <div class="navbarClass">
        <button
          class="w3-button w3-xlarge"
          onClick={() => {
            console.log("open");
            setIsOpen(true);
          }}
          style={{ display: "block" }}
        >
          ☰
        </button>
        <div
          style={{
            height: "30px",
            display: "inline-block",
            width: "95%",
            padding: "0%",
          }}
          class="w3-container"
        >
          <h1
            style={{
              textAlign: "center",
              paddingBottom: "8%",
            }}
          >
            Online Multiple Choice Test System
          </h1>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
