const endpoints = {
  playersProd: 'https://fore-finder-be.herokuapp.com/api/v1/players',
  playersDev: 'http://8f05812ea9bf.ngrok.io/api/v1/players',
  coursesProd: 'https://fore-finder-be.herokuapp.com/api/v1/courses',
  coursesDev: 'http://8f05812ea9bf.ngrok.io/api/v1/courses',
  eventsProd: 'https://fore-finder-be.herokuapp.com/api/v1/events',
  eventsDev: 'http://8f05812ea9bf.ngrok.io/api/v1/events'
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

export const getAllEvents = () => {
  return fetch(endpoints.eventsDev)
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Can\'t fetch any events, please try again!')
      } else {
        return resp.json()
      }
    })
}

export const postEvent = (courseId, date, teeTime, openSpots, numHoles, isPrivate, hostId, selectedFriends) => {
  return fetch('http://d48fc90c7809.ngrok.io/api/v1/events', {
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

// for post request, use ngrok while still in development