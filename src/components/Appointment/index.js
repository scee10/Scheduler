import React from 'react';
import "./styles.scss";
import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import useVisualMode from 'hooks/useVisualMode';

export default function Appointment (props) {
  const { time, interview, interviewers, bookInterview, id, cancelInterview } = props;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    if (name && interviewer) {
      transition(SAVING)
    }
      const interview = {
        student: name,
        interviewer
      };
      bookInterview(id, interview)
      .then(() => transition(SHOW))
  }

  function removeInterview() {
      transition(DELETING, true)
      cancelInterview(id)
        .then(() => 
        transition(EMPTY))
  }

  function confirmCancelInt() {
    transition(CONFIRM)
  }

  return (
    <article className="appointment">
      <Header 
        time={time}/>
      {mode === EMPTY && 
        <Empty 
          onAdd={() => transition(CREATE)} />}
      {mode === CREATE && 
        <Form
          interviewers={interviewers} 
          onCancel={() => back(EMPTY)} 
          onSave={save}
          />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onDelete={confirmCancelInt}
        />
      )}
      {mode === CONFIRM && 
        <Confirm 
          onCancel={back}
          onConfirm={removeInterview}
          message={"Are you sure you would like to delete this interview?"}
        />}
      {mode === SAVING && <Status message={"Saving"}/>}
      {mode === DELETING && <Status message={"Deleting"}/>}
    </article>
  )
}