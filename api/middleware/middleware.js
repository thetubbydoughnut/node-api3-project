const Users = require('../users/users-model')

function logger(req, res, next) {
  // DO YOUR MAGIC
  const methodName = req.method;
  const url = req.url;
  const timeStamp = new Date().toISOString();

  console.log(`time: ${timeStamp}, url: ${url}, method: ${methodName}`)

  next();
}

async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  try {
    const user = await Users.getById(req.params.id)
    if (user) {
      req.user = user
      next()
    } else {
      next({
        status: 404, message: "user not found"
      })
    }
  } catch (err) {
    next(err);
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const { name } = req.body
  
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ message: "missing required name field" })
  }

  req.name = name.trim();
  next()
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  const { text } = req.body

  if (!text || typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ message: "missing required text field" })
  }

  req.text = text.trim();
  next()
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}