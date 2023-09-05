import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        min={props.min}
        max={props.max}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
      />
      {!props.enteredDayIsValid && (
        <p className={classes["error-message"]}>This field is required</p>
      )}
    </div>
  );
};

export default Input;
