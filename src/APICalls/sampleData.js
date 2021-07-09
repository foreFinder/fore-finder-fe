// GOLF COURSE DATA

export const courses = [
  {
    id: 100,
    name: 'Green Valley Ranch Golf Club',
    street: '4900 Himalaya Road',
    city: 'Denver',
    state: 'Colorado',
    zip: '80249',
    phone: '303.371.3131',
    cost: 80,
  },
  {
    id: 101,
    name: 'City Park Golf Course',
    street: '3181 E. 23rd Avenue',
    city: 'Denver',
    state: 'Colorado',
    zip: '80205',
    phone: '720.865.3410',
    cost: 65,
  },
  {
    id: 102,
    name: 'Riverdale Golf Club',
    street: '13300 Riverdale Road',
    city: 'Brighton',
    state: 'Colorado',
    zip: '80602',
    phone: '303.659.4700',
    cost: 74,
  },
  {
    id: 103,
    name: 'Willis Case Golf Course',
    street: '4999 Vrain Street',
    city: 'Denver',
    state: 'Colorado',
    zip: '80212',
    phone: '720.865.0700',
    cost: 58
  }
]


// PLAYER DATA

export const players = [
  {
    id: 1,
    name: 'Eric Rabun',
    friends: [2, 3, 5],
    committedTimes: [/*list of tee time event id's*/],
  },
  {
    id: 2,
    name: 'Tyson McNutt',
    friends: [1, 5, 6],
    committedTimes: [],
  },
  {
    id: 3,
    name: 'Jon Schlandt',
    friends: [1, 5],
    committedTimes: [],
  },
  {
    id: 4,
    name: 'Chris Anderson',
    friends: [1, 2, 5, 6],
    committedTimes: [],
  },
  {
    id: 5,
    name: 'Jahara Clark',
    friends: [2, 4],
    committedTimes: [],
  },
  {
    id: 6,
    name: "Keegan O'Shea",
    friends: [1, 2, 3, 4, 5],
    committedTimes: [],
  }
]


// EVENTS DATA

export const teeTimes = [
  {
    id: 1000,
    location: 102,    // id of the course that is booked
    date: '08/01/2021',   // format the same as whatever date selector we use
    time: '13:20',       // format the same as however we want to display the time
    numOpenSpots: 3,
    host: 3,     // id of player who booked
    players: [],   // list of players who have committed with a max length of numOpenSpots
    invites: [],   /*list of player id's who were notified*/
    private: true
  },
  {
    id: 1001,
    location: 100,
    date: '08/04/2021',
    time: '09:30',
    numOpenSpots: 2,
    host: 1,
    players: [],
    invites: [],
    private: false
  }
]