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

export const postEvent = (courseId, date, teeTime, openSpots, numHoles, selectedFriends) => {
  return fetch('https://63cb5fde788d.ngrok.io/api/v1/event', {
    method:
  })
}

// for post request, use ngrok while still in development