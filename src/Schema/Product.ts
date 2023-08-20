import mg from 'mongoose'

const schema = new mg.Schema({
  id: { type: String, required: true, unique: true }, // Product ID
  time: { type: String, required: true, default: "Some day" }, // Timestamp
  description: { type: String, required: true }, // Product description
  title: { type: String, required: true }, // Product Announcement
  slug: { type: String, required: true, unique: true }, // slug

  date: { type: Date, default: Date.now },
  img1: { type: String, required: false },
  img2: { type: String, required: false },
  img3: { type: String, required: false }
})

export default mg.model('Products', schema)