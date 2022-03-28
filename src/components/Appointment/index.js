import React from 'react';
import "./styles.scss";
import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import Form from './Form';
import useVisualMode from 'hooks/useVisualMode';

export default function Appointment (props) {
  const { time, interview, interviewers, bookInterview} = props;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );
  function save(name, interviewer) {
      const interview = {
        student: name,
        interviewer
      };

      bookInterview(props.id, interview)
      transition(SHOW)
  }

  return (
    <article className="appointment">
      <Header 
        time={time}/>
      {mode === EMPTY && <Empty 
        onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form
        interviewers={interviewers} 
        onCancel={() => back(EMPTY)} 
        onSave={save}/>}
      {mode === SHOW && (
      <Show
        student={interview.student}
        interviewer={interview.interviewer}
        />
      )}
    </article>
  )
}