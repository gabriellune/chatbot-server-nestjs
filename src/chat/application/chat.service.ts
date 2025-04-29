import { Injectable } from '@nestjs/common';
import { MessageRepository } from '../domain/interfaces/message.repository';
import { Message } from '../domain/entities/message.entity';

@Injectable()
export class ChatService {
    constructor(private readonly messageRepository: MessageRepository) { }

    async sendMessage(userId: string, content: string): Promise<Message> {
        const message = new Message(userId, content);
        return this.messageRepository.save(message);
    }

    async getMessages(): Promise<Message[]> {
        return this.messageRepository.findAll();
    }

    async getMessageById(id: string): Promise<Message | null> {
        return this.messageRepository.findById(id);
    }

    async deleteMessage(id: string): Promise<void> {
        return this.messageRepository.delete(id);
    }
}
