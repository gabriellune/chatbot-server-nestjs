import { Message } from '../entities/message.entity';

export interface MessageRepository {
  save(message: Message): Promise<Message>;
  findAll(): Promise<Message[]>;
  findById(id: string): Promise<Message | null>;
  delete(id: string): Promise<void>;
}
