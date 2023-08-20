import mg from 'mongoose'

const schema = new mg.Schema({
  userId: { type: String, required: true },
  ProductId: { type: String, required: true }, // Product ID
  ProductDate: { type: Date, default: Date.now },
  ProductDescription: { type: String, required: true }, // Product description
  ProductTitle: { type: String, required: true }, // Product Announcement title
  ProductSlug: { type: String, required: true },
  quantity: { type: Number, required: true }
});

export default mg.model('cartItemSchema', schema)