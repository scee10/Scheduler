import { useEffect, useState } from 'react';
import axios from 'axios';
import updatingSpotsHelper from './updatingSpotsHelper';

export default function useApplicationData(props) {
  const [state, setState] = useState ({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });
  const setDay = day => setState({ ...state, day });
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ])
    .then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  }, [])

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updatingSpotsHelper(state, id, appointments);
    return axios.put(`/api/appointments/${id}`,{interview})
    .then(res => {
      setState({...state, appointments, days})
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updatingSpotsHelper(state, id, appointments);
    return axios.delete(`/api/appointments/${id}`,appointment)
    .then(() => {
      setState({...state, appointments, days})
    })
  }
  return { state, setDay, bookInterview, cancelInterview}
}