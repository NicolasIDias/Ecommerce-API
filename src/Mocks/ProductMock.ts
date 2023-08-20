import mg from 'mongoose'

const schema = new mg.Schema({
  id: { type: String, required: true, unique: true }, // Product ID
  time: { type: Date, default: Date.now },
  description: { type: String, required: true }, // Product description
  title: { type: String, required: true }, // Product Announcement title
  slug: { type: String, required: true, unique: true },
})
export default mg.model('ProductsMocks', schema)