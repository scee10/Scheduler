import React from "react";
import InterviewList from "components/InterviewList";
import Button from "components/Button";
import { useState } from 'react';

export default function Form (props) {
  const {onCancel, onSave, interviewer, interviewers, student} = props;
  const [studentName, setStudent] = useState(student || "");
  const [interviewerID, setInterviewer] = useState(interviewer || null);

  const reset = () => {
    setStudent("")
    setInterviewer(null)
  }

  const cancel = () => {
    reset()
    onCancel()
  }

  const save = (props) => {
    if (studentName && interviewerID) {
      onSave(studentName, interviewerID)
    }
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            onChange={(event) => setStudent(event.target.value)}
            className="appointment__create-input text--semi-bold"
            value={studentName}
            type="text"
            placeholder="Enter Student Name"
          />
        </form>
        <InterviewList 
          interviewers={interviewers}
          value={interviewerID}
          onChange={(event) => setInterviewer(event)}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => save(props)}>Save</Button>
        </section>
      </section>
    </main>
  )
}