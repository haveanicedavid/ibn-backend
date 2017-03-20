import mongoose, { Schema } from 'mongoose'
const SnapSchema = new Schema({
  BTCERates: {
    type: Schema.Types.Mixed
  },
  PoloniexRates: {
    type: Schema.Types.Mixed
  },
  createdAt: {
    type: Date
  }
})

export default mongoose.model('Snap', SnapSchema)
