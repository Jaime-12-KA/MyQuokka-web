import mongoose, { Document, Schema, Model } from 'mongoose';

export interface ITicket extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  category: string;
  status: 'pending' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo?: mongoose.Types.ObjectId;
  files?: string[];
  messages: {
    sender: mongoose.Types.ObjectId;
    content: string;
    timestamp: Date;
    isStaff: boolean;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const TicketSchema = new Schema<ITicket>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, '제목은 필수 입력 항목입니다.'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, '설명은 필수 입력 항목입니다.'],
    },
    category: {
      type: String,
      required: [true, '카테고리는 필수 입력 항목입니다.'],
      enum: ['housing', 'transportation', 'administration', 'healthcare', 'emergency', 'other'],
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'resolved', 'closed'],
      default: 'pending',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high', 'urgent'],
      default: 'medium',
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    files: {
      type: [String],
    },
    messages: [
      {
        sender: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
        isStaff: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Model 타입을 명시적으로 정의
const TicketModel: Model<ITicket> = mongoose.models.Ticket || mongoose.model<ITicket>('Ticket', TicketSchema);

export default TicketModel; 