import React from 'react';
import "./styles.scss";
import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';
import useVisualMode from 'hooks/useVisualMode';

export default function Appointment (props) {
  const { time, interview, interviewers, bookInterview, id, cancelInterview } = props;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
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

      transition(SAVING);

      bookInterview(id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true))
  }

  function removeInterview() {
      transition(DELETING, true)
      cancelInterview(id)
        .then(() => 
        transition(EMPTY))
        .catch(() => transition(ERROR_DELETE, true))
  }

  function confirmCancelInt() {
    transition(CONFIRM)
  }

  function editInterview() {
    transition(EDIT)
  }

  return (
    <article className="appointment">
      <Header 
        time={time}/>
      {mode === EMPTY && 
        <Empty 
          onAdd={() => transition(CREATE)} 
        />}
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
          onEdit={editInterview}
          onDelete={confirmCancelInt}
        />)}
      {mode === CONFIRM && 
        <Confirm 
          onCancel={back}
          onConfirm={removeInterview}
          message={"Are you sure you would like to delete this interview?"}
        />}
      {mode === EDIT && 
        <Form
          student={interview.student}
          interviewer={interview.interviewer.id}
          interviewers={interviewers} 
          onCancel={() => back(EMPTY)} 
          onSave={save}
        />}
      {mode === SAVING && <Status message={"Saving"}/>}
      {mode === DELETING && <Status message={"Deleting"}/>}
      {mode === ERROR_SAVE && 
        <Error 
          message="Was not able to create appointment"
          onClose={back}
        />
      }
      {mode === ERROR_DELETE && 
        <Error 
          message="Was not able to cancel appointment"
          onClose={back}
        />
      }
    </article>
  )
}