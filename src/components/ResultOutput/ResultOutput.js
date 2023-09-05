import classes from "./ResultOutput.module.css";

const ResultOutput = (props) => {
  return (
    <div className={classes.output}>
      <span>{props.data}</span>
      <p>{props.label}</p>
    </div>
  );
};

export default ResultOutput;
