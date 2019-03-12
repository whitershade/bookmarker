import bcrypt from 'bcrypt';
import mongoose from '../../../db/mongoose';

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  name: {
    type: String
  }
}, {
  timestamps: true,
  collection: 'Users'
});

UserSchema.statics = {
  checkUser(email: string, password: string, next: any) {
    this
      .findOne({ email })
      .select('email password')
      .lean()
      .exec((err: { message: any; }, user: { password: string; }) => {
        if (err) {
          return next({ message: err.message });
        }

        if (!user) {
          return next({ message: 'email is not correct' });
        }

        const compare = bcrypt.compareSync(password, user.password);

        if (compare) {
          next(false, user);
        } else {
          next({ message: 'password is not correct' });
        }
      });
  },

  serializeUser(user: { _id: { toString: () => void; }; }, next: (error: boolean, id: any) => void) {
    next(false, user._id.toString());
  },

  deserializeUser(id: any, next: { (error: { message: string; }): void; (error: boolean, user: any): void; }) {
    this
      .findById(id)
      .select('email name')
      .lean()
      .exec((err: { message: string; }, user: any) => {
        if (err) return next({ message: err.message });
        if (!user) return next({ message: 'email is not correct' });

        next(false, user);
      });
  }
};

UserSchema.pre('save', function userPreSave(next: () => void) {
  // @ts-ignore
    if (this.isNew || this.isModified('password')) {
    // @ts-ignore
      this.password = bcrypt.hashSync(this.password, 10);
  }

  next();
});

export const UserModel = mongoose.model('User', UserSchema);
