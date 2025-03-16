import mongoose, { Document, Schema, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  language: string;
  profileImage?: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, '이름은 필수 입력 항목입니다.'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, '이메일은 필수 입력 항목입니다.'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        '유효한 이메일 주소를 입력해주세요.',
      ],
    },
    password: {
      type: String,
      required: [true, '비밀번호는 필수 입력 항목입니다.'],
      minlength: [6, '비밀번호는 6자 이상이어야 합니다.'],
    },
    language: {
      type: String,
      enum: ['ko', 'en'],
      default: 'ko',
    },
    profileImage: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    }
  },
  {
    timestamps: true,
  }
);

// 비밀번호 해시화
UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// 비밀번호 비교 메서드
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Model 타입을 명시적으로 정의
const UserModel: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default UserModel; 