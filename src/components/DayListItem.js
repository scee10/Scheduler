import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss"

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item",{
    "day-list__item--selected":props.selected,
    "day-list__item--full":!props.spots
  })

  const formatSpots = () => {
    if (props.spots === 1) {
      return <h3 className="text--light">{props.spots} spot remaining</h3>
    }
    if (props.spots === 0) {
      return <h3 className="text--light"> no spots remaining</h3>
    }
    if (props.spots >= 2) {
      return <h3 className="text--light">{props.spots} spots remaining</h3>
    }
  }
  
  return (
    <li className={dayClass} onClick={props.onChange}>
      <h2 className="text--regular">{props.name}</h2> 
      {formatSpots(props.spots)} 
    </li>
  );
}