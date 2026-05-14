import mongooseDb from 'mongoose';

export interface IContact extends mongooseDb.Document {
  name: string;
  company: string;
  ruc: string;
  email: string;
  phone: string;
  comment?: string;
  status: 'pending' | 'contacted';
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema: mongooseDb.Schema = new mongooseDb.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    ruc: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    comment: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'contacted'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

export const Contact = mongooseDb.model<IContact>('Contact', ContactSchema);
