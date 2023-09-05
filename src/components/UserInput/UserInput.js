import classes from "./UserInput.module.css";
import { useState } from "react";
import Button from '../UI/Button'

const UserInput = (props) => {
  const [enteredDay, setEnteredDay] = useState("");
  const [enteredDayisValid, setEnteredDayisValid] = useState(true);

  const [enteredMonth, setEnteredMonth] = useState("");
  const [enteredMonthisValid, setEntereMonthisValid] = useState(true);

  const [enteredYear, setEnteredYear] = useState("");
  const [enteredYearIsValid, setEnteredYearIsValid] = useState(true);

  const [formIsValid, setFormIsValid] = useState(true);

  const [errorDayMessage, setErrorDayMessage] = useState("");
  const [errorMonthMessage, setErrorMonthMessage] = useState("");
  const [errorYearMessage, setErrorYearMessage] = useState("");
  const [errorFormMessage, setErrorFormMessage] = useState("");

  const dayChangeHandler = (event) => {
    setEnteredDay(event.target.value);
  };

  const monthChangeHandler = (event) => {
    setEnteredMonth(event.target.value);
  };

  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const daysLimit = new Date(enteredYear, enteredMonth, 0).getDate();
    const actualYear = new Date().getFullYear().toString();

    if (!enteredDay) {
      setEnteredDayisValid(false);
      setErrorDayMessage("This field is required");
    }

    if (enteredDay && (enteredDay <= 0 || enteredDay > daysLimit)) {
      setEnteredDayisValid(false);
      setErrorDayMessage("Must be a valid day");
    }

    if (!enteredMonth) {
      setEntereMonthisValid(false);
      setErrorMonthMessage("This field is required");
    }

    if (enteredMonth && (enteredMonth <= 0 || enteredMonth > 12)) {
      setEntereMonthisValid(false);
      setErrorMonthMessage("Must be a valid month");
    }

    if (!enteredYear) {
      setEnteredYearIsValid(false);
      setErrorYearMessage("This field is required");
    }

    if (enteredYear && enteredYear > actualYear) {
      setEnteredYearIsValid(false);
      setErrorYearMessage("Must be in the past");
    }

    if (enteredDay && enteredDay > 0 && enteredDay <= daysLimit) {
      setEnteredDayisValid(true);
      setErrorDayMessage("");
    }

    if (enteredMonth && enteredMonth > 0 && enteredMonth <= 12) {
      setEntereMonthisValid(true);
      setErrorMonthMessage("");
    }

    if (enteredYear && enteredYear <= actualYear) {
      setEnteredYearIsValid(true);
      setErrorYearMessage("");
    }

    const dayIsValid = enteredDay && enteredDay > 0 && enteredDay <= daysLimit;
    const monthIsValid = enteredMonth && enteredMonth > 0 && enteredMonth <= 12;
    const yearIsValid = enteredYear && enteredYear <= actualYear;

    const fieldAreRequired = !enteredDay || !enteredMonth || !enteredYear;
    const fieldsHasErrors = !dayIsValid || !monthIsValid || !yearIsValid;
    const dateIsInvalid = !dayIsValid && monthIsValid && yearIsValid;

    if (fieldAreRequired) {
      setFormIsValid(false);
    }

    if (!fieldAreRequired && fieldsHasErrors) {
      setFormIsValid(false);
    }

    if (dateIsInvalid) {
      setErrorDayMessage("");
      setFormIsValid(false);
      setErrorFormMessage("Must be a valid date");
    }

    if (!fieldAreRequired && !fieldsHasErrors) {
      const inputDate = new Date(
        `${enteredYear}-${enteredMonth}-${enteredDay}`
      );

      if (inputDate > new Date()) {
        setFormIsValid(false);
        setErrorFormMessage("Must be in the past");
      } else {
        setFormIsValid(true);
        setErrorFormMessage("");
        const birthday = `${enteredYear}-${enteredMonth}-${enteredDay}`;
        props.onFormSubmit(birthday);
      }
    }
  };

  const dayInputClasses = `${
    enteredDayisValid || formIsValid
      ? classes["form-control"]
      : classes["form-control"]
  } ${!enteredDayisValid || !formIsValid ? classes.invalid : ""}`;

  const monthInputClasses = `${
    enteredMonthisValid || formIsValid
      ? classes["form-control"]
      : classes["form-control"]
  } ${!enteredMonthisValid || !formIsValid ? classes.invalid : ""}`;

  const yearInputClasses = `${
    enteredYearIsValid || formIsValid
      ? classes["form-control"]
      : classes["form-control"]
  } ${!enteredYearIsValid || !formIsValid ? classes.invalid : ""}`;

  return (
    <form onSubmit={submitHandler}>
      <div className={dayInputClasses}>
        <label htmlFor="day">day</label>
        <input
          type="number"
          id="day"
          placeholder="DD"
          value={enteredDay}
          onChange={dayChangeHandler}
        />
        {(!enteredDayisValid || !formIsValid) && (
          <p className={classes["error-message"]}>
            {errorDayMessage || errorFormMessage}
          </p>
        )}
      </div>
      <div className={monthInputClasses}>
        <label htmlFor="month">month</label>
        <input
          type="number"
          id="month"
          placeholder="MM"
          value={enteredMonth}
          onChange={monthChangeHandler}
        />
        {(!enteredMonthisValid || !formIsValid) && (
          <p className={classes["error-message"]}>{errorMonthMessage}</p>
        )}
      </div>
      <div className={yearInputClasses}>
        <label htmlFor="year">year</label>
        <input
          type="number"
          id="year"
          placeholder="YYYY"
          value={enteredYear}
          onChange={yearChangeHandler}
        />
        {(!enteredYearIsValid || !formIsValid) && (
          <p className={classes["error-message"]}>{errorYearMessage}</p>
        )}
      </div>
      <Button type>
        <img src="images/icon-arrow.svg" alt="icon-arrow" />
      </Button>
    </form>
  );
};

export default UserInput;
