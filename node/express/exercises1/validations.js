const isValidUserName = (req, res, next) => {
  const { username } = req.body;
  
  if(!username || username.length < 3)
    return res.status(400).json({message: 'invalid uname'});

  next();
}

const isValidEmail = (req, res, next) => {
  const {email} = req.body

  if (
    !email ||
    !email.includes('@') ||
    !email.includes('.com')
  )
  return res.status(400).json({message: "invalid pwd"})

  next();
}

const isValidPassword = (req, res, next) => {
  const {password} = req.body;
  const passwordRegex = /([0-9])\w+/;

  if (
    password.length < 3 ||
    password.length > 8 ||
    !password.toString().match(passwordRegex)
  )

  return res.status(400).json({message: 'invalid data'})

  next();
}

module.exports = {
  isValidUserName,
  isValidPassword,
  isValidEmail
}