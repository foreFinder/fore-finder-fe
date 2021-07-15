export const getAllPlayers = () => {
  return fetch('https://fore-finder-be.herokuapp.com/api/v1/players')
    .then(resp => {
      if (!resp.ok) {
        throw new Error("Can't fetch any players, please try again!")
      } else {
        return resp.json()
      } 
    })
}

export const getAllCourses = () => {
  return fetch('https://fore-finder-be.herokuapp.com/api/v1/courses')
    .then(resp => {
      if (!resp.ok) {
        throw new Error("Can't fetch any courses, please try again!")
      } else {
        return resp.json()
      } 
    })
}

export const postEvent = (courseId, date, teeTime, openSpots, numHoles, isPrivate, hostId, selectedFriends) => {
  return fetch('http://1a102d437dbb.ngrok.io/api/v1/event', {
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