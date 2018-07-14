// chai
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)

// mongoose
import mongoose from 'mongoose'
mongoose.Promise = global.Promise