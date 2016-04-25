var users = [
  {
    name: 't',
    password: 't',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function (req, res, next) {
    var userFound;

    for (var i = 0; i < users.length; i++) {
      if (users[i].name === req.body.userName &&
        users[i].password === req.body.password) {
          req.session.currentUser = users[i];
          userFound = req.session.currentUser;
          console.log("User Found!");
      }
    }
    if (userFound) {
      console.log(userFound);
      res.send(userFound);
    }
    else if (!userFound){
      res.send({ userFound: false });
      console.log("User Not Found SERVERSIDE!");
    }
  }
};
