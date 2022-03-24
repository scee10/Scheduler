export function getAppointmentsForDay(state, day) {

  let appointmentArr = [];
  let correctAppointmentsForDay = [];

  // accessing days inside state Array
  const stateArrDays = Object.values(state)[0]
  // accessing appointments inside state Array
  const stateArrAppointments = Object.values(state)[1]
  
  // pushing the correct ids for specific day into new array
  stateArrDays.map(dayObj => {
    if (dayObj.name === day) {
      dayObj.appointments.forEach(id => appointmentArr.push(id))
    }
  })

  //push each object[correct id] into new array 
  appointmentArr.forEach(id => {
    correctAppointmentsForDay.push(stateArrAppointments[id])
  })

  return correctAppointmentsForDay
}
