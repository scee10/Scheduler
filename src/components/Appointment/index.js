import React from 'react';
import "./styles.scss";
import Header from './Header';
import Empty from './Empty';
import Show from './Show';

export default function Appointment (props) {
  const { time, interview } = props;

  const showOrEmpty = () => {
    if (!interview) {
      return <Empty />
    }
    return <Show student={interview.student} interviewer={interview.interviewer.name} />
  }
  return (
    <article className="appointment">
      <Header 
      time={time}/>
      {showOrEmpty()}
    </article>
  )
}