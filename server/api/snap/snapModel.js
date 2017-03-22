import mongoose, { Schema } from 'mongoose'
const SnapSchema = new Schema({
  ltcRates: {
    type: Schema.Types.Mixed
  },
  dshRates: {
    type: Schema.Types.Mixed
  },
  ethRates: {
    type: Schema.Types.Mixed
  },
  createdAt: {
    type: Date
  }
})

export default mongoose.model('Snap', SnapSchema)
