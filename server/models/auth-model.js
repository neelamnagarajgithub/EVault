import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  displayName: String,
  firstName: String,
  lastName: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
 
});

userSchema.statics.findOrCreate = async function (conditions, doc) {
  const result = await this.findOne(conditions);
  return result || this.create(doc);
};

const User = mongoose.model('User', userSchema);

export default User;