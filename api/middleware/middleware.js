const Users = require('../users/users-model')
const Posts = require('../posts/posts-model')

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
  // const user = await  
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}