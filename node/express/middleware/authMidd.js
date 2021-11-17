const validUsers = [
  { username: 'MestreCuca', password: '123asd' },
  { username: 'McRonald', password: '123asd' },
  { username: 'Burger Queen', password: '123asd' },
  { username: 'UpWay', password: '123asd' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if(!username || !password) {
    return res.status(401).json({message: 'username or psswd can`t be blank'});
  }

  const foundUser = validUsers.find((user) => user.username === username);

  if(!foundUser) return res.status(401).json({message: "invalid credentials"});
  

  if(username !== foundUser.username || password !== foundUser.password) {
    return res.status(401).json({ message: 'Invalid Credentials' });
  }

  req.user = foundUser

  next();
}

module.exports = authMiddleware;