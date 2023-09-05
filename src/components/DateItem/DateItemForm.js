import { useState } from "react";
import classes from "./DateItemForm.module.css";
import Input from "../UI/Input";

const DateItemForm = () => {
  const [enteredDay, setEnteredDay] = useState("");
  const [enteredDayIsValid, setEnteredDayIsValid] = useState(true);

  const dayChangeHandler = (event) => {
    setEnteredDay(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredDay.trim() === '') {
      setEnteredDayIsValid(false);
      return;
    }

    setEnteredDayIsValid(true);

  };

  const dayInputClasses = `${
    enteredDayIsValid ? classes["form-control"] : classes["form-control"]
  } ${!enteredDayIsValid ? classes.invalid : ""}`;

  return (
    <form onSubmit={submitHandler}>
      <Input label="day" type="number" id="day" pale/>
      <div className={dayInputClasses}>
        <label htmlFor="day">day</label>
        <input
          type="number"
          id="day"
          placeholder="DD"
          onChange={dayChangeHandler}
          value={enteredDay}
        />
        {!enteredDayIsValid && (
          <p className={classes["error-message"]}>This field is required</p>
        )}
      </div>
      <div className={dayInputClasses}>
        <label htmlFor="month">month</label>
        <input
          type="number"
          id="month"
          placeholder="MM"
          onChange={dayChangeHandler}
          value={enteredDay}
        />
        {!enteredDayIsValid && (
          <p className={classes["error-message"]}>This field is required</p>
        )}
      </div>
      <div className={dayInputClasses}>
        <label htmlFor="year">year</label>
        <input
          type="number"
          id="year"
          placeholder="YYYY"
          onChange={dayChangeHandler}
          value={enteredDay}
        />
        {!enteredDayIsValid && (
          <p className={classes["error-message"]}>This field is required</p>
        )}
      </div>
      <button>
        <img src="images/icon-arrow.svg" alt="icon-arrow" />
      </button>
    </form>
  );
};

export default DateItemForm;