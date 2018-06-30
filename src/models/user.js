import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schema = Schema({
  name: { type: String },
  created_at: { type: Date, default: Date.now }
})

const User = mongoose.model('User', schema)

export default User