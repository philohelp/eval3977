import React from "react";
import PropTypes from "prop-types";
import Checkbox from "material-ui/Checkbox";

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginLeft: 26
  }
};

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <Checkbox
        style={styles.checkbox}
        id={props.answerType}
        label={props.answerContent}
        value={props.answerType}
        onCheck={props.onAnswerSelected}
      />
    </li>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;

/*
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
      */
