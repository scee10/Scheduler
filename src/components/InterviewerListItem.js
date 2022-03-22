import React from "react";
import "components/InterviewListItem.scss";
import classNames from "classnames";

export default function InterviewListItem(props) {
  const { name, avatar, id, setInterviewer, selected, image } = props;
  const nameClass = classNames("interviewers__item",{
    "day-list__item--selected": selected,
    "interviewers__item-image": !image
  })

  return (
    <li className={nameClass} onClick={() => {setInterviewer(id)}}>
      <img
        className={nameClass}
        src={avatar}
        alt={name}
      />
      {selected && name}  
    </li>
  );
}