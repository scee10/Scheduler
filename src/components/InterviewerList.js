import React from "react";

import PropTypes from "prop-types";
import "components/InterviewerList.scss";

import InterviewerListItem from "./InterviewerListItem";

function InterviewerList(props) {
  const { value, onChange, interviewers } = props;

  const listInterviewers = interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        setInterviewer={() => onChange(interviewer.id)}
        selected={value === interviewer.id}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewers</h4>
      <ul className="interviewers__list">{listInterviewers}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};

export default InterviewerList;
