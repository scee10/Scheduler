import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {  
 
  const listDays = props.days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        onChange={() => props.onChange(day.name)}
        selected={day.name === props.value}
      />
    )
  })
  return (
    <ul>
      {listDays}
    </ul>
  )
}