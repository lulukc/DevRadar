const mongoose = require('mongoose')
const Point = require('./util/Point')

const DevSchema = mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: Point,
    createIndexes: '2dsphere'
  }
})
module.exports = mongoose.model('Dev', DevSchema)
