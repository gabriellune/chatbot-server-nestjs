import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageRepository } from '../../domain/interfaces/message.repository';
import { Message } from '../../domain/entities/message.entity';
import { MessageDocument } from './message.schema';

@Injectable()
export class MessageRepositoryImpl implements MessageRepository {
    constructor(
        @InjectModel('Message') private readonly messageModel: Model<MessageDocument>,
    ) { }

    async save(message: Message): Promise<Message> {
        const createdMessage = new this.messageModel(message);
        return createdMessage.save();
    }

    async findAll(): Promise<Message[]> {
        const messages = await this.messageModel.find().exec();
        return messages.map((msg) => new Message(msg.id, msg.userId, msg.content, msg.createdAt));
    }

    async findById(id: string): Promise<Message | null> {
        const message = await this.messageModel.findById(id).exec();
        if (!message) return null;
        return new Message(message.id, message.userId, message.content, message.createdAt);
    }

    async delete(id: string): Promise<void> {
        await this.messageModel.findByIdAndDelete(id).exec();
    }
}
