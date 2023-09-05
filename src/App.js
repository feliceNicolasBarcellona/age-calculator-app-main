import { Fragment, useState } from "react";
import "./App.css";
import Card from "./components/UI/Card";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [yearsPassed, setYearsPassed] = useState("- -");
  const [monthsPassed, setMonthsPassed] = useState("- -");
  const [daysPassed, setDaysPassed] = useState("- -");

  const handleFormSubmit = (data) => {
    function computeDateDifference(birthday, currentDate) {
      const birth = new Date(birthday);
      const current = new Date(currentDate);
    
      let yearsPassed = current.getFullYear() - birth.getFullYear();
      let monthsPassed = current.getMonth() - birth.getMonth();
      let daysPassed = current.getDate() - birth.getDate();
    
      if (daysPassed < 0) {
        const lastDayOfPreviousMonth = new Date(
          current.getFullYear(),
          current.getMonth(),
          0
        ).getDate();
    
        daysPassed = lastDayOfPreviousMonth - birth.getDate() + current.getDate();
        monthsPassed--;
      }
    
      if (monthsPassed < 0) {
        yearsPassed--;
        monthsPassed += 12;
      }
    
      return {
        yearsPassed,
        monthsPassed,
        daysPassed,
      };
    }
    
    const birthday = data;
    const currentDate = new Date().toISOString().split('T')[0];
    
    const difference = computeDateDifference(birthday, currentDate);
    
    setYearsPassed(difference.yearsPassed);
    setMonthsPassed(difference.monthsPassed);
    setDaysPassed(difference.daysPassed)
    
  };

  return (
    <Fragment>
      <main>
        <Card>
          <UserInput onFormSubmit={handleFormSubmit} />
          <div className="output-container">
            <div className="output">
              <span>{yearsPassed}</span>
              <p>years</p>
            </div>
            <div className="output">
              <span>{monthsPassed}</span>
              <p>months</p>
            </div>
            <div className="output">
              <span>{daysPassed}</span>
              <p>days</p>
            </div>
          </div>
        </Card>
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/feliceNicolasBarcellona">
          Felice Nicolas Barcellona
        </a>
        .
      </div>
    </Fragment>
  );
}

export default App;
