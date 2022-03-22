import React from 'react';
import "./styles.scss";
import Header from './Header';
import Empty from './Empty';
import Show from './Show';

export default function Appointment (props) {

  return (
    <article className="appointment">
      {!props.time && "No appointments"}
      {props.time && `Appointment at ${props.time}`}
    </article>
  )
}