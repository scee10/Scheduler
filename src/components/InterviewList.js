import React from "react";
import InterviewListItem from "./InterviewerListItem";
import "components/InterviewList.scss";


export default function InterviewList (props) {  
  const {value, onChange} = props;
 
  const listInterviewers = props.interviewers.map((interviewer) => {
    return (
      <InterviewListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        setInterviewer={() => onChange(interviewer.id)}
        selected={value === interviewer.id}
      />
    )
  })
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewers</h4>
      <ul className="interviewers__list">
        {listInterviewers}
      </ul>
    </section>
  )
}