import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true },
);

export interface MessageDocument extends mongoose.Document {
    id: string;
    userId: string;
    content: string;
    createdAt: Date;
}
