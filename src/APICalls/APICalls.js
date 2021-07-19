const devEnv = 'http://861341e035fa.ngrok.io/'

const endpoints = {
  playersProd: 'https://fore-finder-be.herokuapp.com/api/v1/players',
  playersDev: `${devEnv}api/v1/players`,
  coursesProd: 'https://fore-finder-be.herokuapp.com/api/v1/courses',
  coursesDev: `${devEnv}api/v1/courses`,
  playerEventProd: 'https://fore-finder-be.herokuapp.com/api/v1/player-event',
  playerEventDev: `${devEnv}api/v1/player-event`,
  singleEventProd: 'https://fore-finder-be.herokuapp.com/api/v1/players',
  singleEventDev: `${devEnv}api/v1/event`
}

export const getAllPlayers = () => {
  return fetch(endpoints.playersDev)
    .then(resp => {
      if (!resp.ok) {
        throw new Error("Can't fetch any players, please try again!")
      } else {
        return resp.json()
      } 
    })
}

export const getAllCourses = () => {
  return fetch(endpoints.coursesDev)
    .then(resp => {
      if (!resp.ok) {
        throw new Error("Can't fetch any courses, please try again!")
      } else {
        return resp.json()
      } 
    })
}

export const getAllEvents = (playerId) => {
  return fetch(`${endpoints.playersDev}/${playerId}/events`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Can\'t fetch any events, please try again!')
      } else {
        return resp.json()
      }
    })
}

export const postEvent = (courseId, date, teeTime, openSpots, numHoles, isPrivate, hostId, selectedFriends) => {
  return fetch('http://861341e035fa.ngrok.io/api/v1/event', {
    method: 'POST', 
    body: JSON.stringify({
      course_id: courseId,
      date: date, 
      tee_time: teeTime,
      open_spots: openSpots, 
      number_of_holes: numHoles,
      private: isPrivate,
      host_id: hostId, 
      invitees: selectedFriends,
    }),
    headers: { 'Content-Type' : 'application/json' } 
  })
  .then(resp => resp.json())
}

export const postInviteAction = (playerId, eventId, inviteStatus) => {
  return fetch(endpoints.playerEventDev, {
    method: 'PATCH',
    body: JSON.stringify({
      player_id: playerId,
      event_id: eventId,
      invite_status: inviteStatus
    }),
    headers: { 'Content-Type': 'application/json'}
  })
  .then(() => getAllEvents(playerId))
}

export const deleteEvent = (eventId, playerId) => {
  return fetch(`${endpoints.singleEventDev}/${eventId}`, {
    method: 'DELETE'
  })
  .then(() => getAllEvents(playerId))
}

// for post request, use ngrok while still in development