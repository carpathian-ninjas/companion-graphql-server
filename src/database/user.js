const bind = require('./bind')

const users = bind('users.json')

module.exports = {
  create() {

  },
  findByEmail(email) {
    return users.find(user => user.email === email)
  }
}
