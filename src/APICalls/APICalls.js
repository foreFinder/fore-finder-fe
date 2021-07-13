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