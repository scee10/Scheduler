export default function updatingSpotsHelper(state, id, appointments) {
  const getDayById = state.days.find((day) => day.appointments.includes(id));

  const getIndexOfDay = state.days.findIndex((day) =>
    day.appointments.includes(id)
  );

  const appointmentsArray = getDayById.appointments.map(
    (id) => appointments[id].interview
  );

  const nullArrayLength = appointmentsArray.filter((el) => el === null).length;

  const day = {
    ...state.days[getIndexOfDay],
    spots: nullArrayLength,
  };

  const days = [...state.days];

  days.splice(getIndexOfDay, 1, day);

  return days;
}
