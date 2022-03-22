import React from "react";
import "components/InterviewListItem.scss";
import classNames from "classnames";

export default function InterviewListItem(props) {
  const { name, avatar, id, setInterviewer, selected} = props;
  const nameClass = classNames("interviewers__item",{
    "interviewers__item--selected": selected,
  })

  return (
    <li className={nameClass} onClick={setInterviewer}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}  
    </li>
  );
}