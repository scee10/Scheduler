import React from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import { useState } from 'react';

export default function Form (props) {
  const {onCancel, onSave, interviewer, interviewers, student} = props;
  const [error, setError] = useState("");
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

  // const save = (props) => {
  //   if (studentName && interviewerID) {
  //     onSave(studentName, interviewerID)
  //   }
  // }

  function validate() {
    if (studentName === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("")
    onSave(studentName, interviewerID)
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            onChange={(event) => setStudent(event.target.value)}
            className="appointment__create-input text--semi-bold"
            name={student}
            value={studentName}
            type="text"
            placeholder="Enter Student Name"
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
        </form>
        <InterviewerList 
          interviewers={interviewers}
          value={interviewerID}
          onChange={(event) => setInterviewer(event)}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => validate(props)}>Save</Button>
        </section>
      </section>
    </main>
  )
}