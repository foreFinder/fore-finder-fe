const devEnv = 'http://43cb8b5b88af.ngrok.io/'

const endpoints = {
  playersProd: 'https://fore-finder-be.herokuapp.com/api/v1/players',
  playersDev: `${devEnv}api/v1/players`,
  coursesProd: 'https://fore-finder-be.herokuapp.com/api/v1/courses',
  coursesDev: `${devEnv}api/v1/courses`,
  playerEventProd: 'https://fore-finder-be.herokuapp.com/api/v1/player-event',
  playerEventDev: `${devEnv}api/v1/player-event`,
  singleEventProd: 'https://fore-finder-be.herokuapp.com/api/v1/event',
  singleEventDev: `${devEnv}api/v1/event`,
  friendshipProd: 'https://fore-finder-be.herokuapp.com/api/v1/friendship',
  friendshipDev: `${devEnv}api/v1/friendship`,
  createProfileProd: 'https://fore-finder-be.herokuapp.com/api/v1/players',
}

export const getAllPlayers = () => {
  return fetch(endpoints.playersProd)
    .then(resp => {
      if (!resp.ok) {
        throw new Error("Can't fetch any players, please try again!")
      } else {
        return resp.json()
      } 
    })
}

export const getAllCourses = () => {
  return fetch(endpoints.coursesProd)
    .then(resp => {
      if (!resp.ok) {
        throw new Error("Can't fetch any courses, please try again!")
      } else {
        return resp.json()
      } 
    })
}

export const getAllEvents = (playerId) => {
  return fetch(`${endpoints.playersProd}/${playerId}/events`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Can\'t fetch any events, please try again!')
      } else {
        return resp.json()
      }
    })
}

export const postEvent = (courseId, date, teeTime, openSpots, numHoles, isPrivate, hostId, selectedFriends) => {
  if (!courseId || !teeTime) {
    return
  }
  return fetch(`https://fore-finder-be.herokuapp.com/api/v1/event`, {
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
  .then(resp => {
    if (resp.ok) {
      return resp.json()
    } else {
      throw new Error()
    }
  })
}

export const postInviteAction = (playerId, eventId, inviteStatus) => {
  return fetch(endpoints.playerEventProd, {
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
  return fetch(`${endpoints.singleEventProd}/${eventId}`, {
    method: 'DELETE'
  })
  .then(() => getAllEvents(playerId))
}

export const postFriendship = (followerId, followeeId) => {
  return fetch(`${endpoints.friendshipProd}`, {
    method: 'POST', 
    body: JSON.stringify({
      follower_id: followerId,
      followee_id: followeeId
    }),
    headers: { 'Content-Type' : 'application/json' } 
  })
  .then(resp => {
    if (resp.ok) {
      return resp.json()
    } else {
      throw new Error('Unable to update friendship, please try again!')
    }
  })
}

export const deleteFriendship = (followerId, followeeId) => {
  return fetch(`${endpoints.friendshipProd}`, {
    method: 'DELETE',
    body: JSON.stringify({
      follower_id: followerId,
      followee_id: followeeId
    }),
    headers: { 'Content-Type' : 'application/json' } 
  })
  .then(resp => {
    if (resp.ok) {
      return resp
    } else {
      throw new Error('Unable to update friendship, please try again!')
    }
  })
}

export const createNewProfile = (name, phone, email, userName, password, passwordConfir) => {
  return fetch(`${endpoints.createProfileProd}`, {
    method: 'POST', 
    body: JSON.stringify({
      name: name, 
      phone: phone, 
      email: email, 
      username: userName, 
      password: password, 
      password_confirmation: passwordConfir
    }),
    headers: { 'Content-Type' : 'application/json' }
  })
  .then(resp => {
    console.log(resp)
    if (resp.ok) {
      return resp
    } else {
      throw new Error('Unable to create new profile, please try again!')
    }
  })
}

// for post request, use ngrok while still in development