import mongoose, { Schema } from 'mongoose'
const SnapSchema = new Schema({
  ltcRate: {
    type: Number
  }
})

export default mongoose.model('Snap', SnapSchema)
