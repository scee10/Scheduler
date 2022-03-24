export function getAppointmentsForDay(state, day) {

  if (state.days.length === 0) {
    return [];
  };

  const correctDay = state.days.find(dayObj => {
    return dayObj.name === day;
  });

  if (correctDay === undefined) {
    return [];
  };

  const appointmentsForDay = correctDay.appointments.map(id => {
    return state.appointments[id];
  });

  return appointmentsForDay;
}

export function getInterview(state, interview) {
  
}
