import mg from 'mongoose'

const schema = new mg.Schema({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

export default mg.model('usersMockdep', schema)