import mg from 'mongoose'

const schema = new mg.Schema({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, unique: true },
  emailVerified: { type: String, required: true, default: false },
  phoneVerified: { type: String, required: true, default: false },
  content: { type: String, required: true},
})
export default mg.model('Users', schema)