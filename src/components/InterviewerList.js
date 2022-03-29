import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from 'prop-types';

function InterviewerList (props) {  
  const {value, onChange, interviewers} = props;
 
  const listInterviewers = interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        setInterviewer={() => onChange(interviewer.id)}
        selected={value === interviewer.id}
      />
    )
  })

  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewers</h4>
      <ul className="interviewers__list">
        {listInterviewers}
      </ul>
    </section>
  )
}

export default InterviewerList;



