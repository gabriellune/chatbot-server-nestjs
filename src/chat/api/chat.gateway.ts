import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WsResponse,
} from '@nestjs/websockets';
import { ChatService } from '../application/chat.service';
import { Message } from '../domain/entities/message.entity';

@WebSocketGateway(3001, { cors: { origin: '*' } })
export class ChatGateway {
    constructor(private readonly chatService: ChatService) { }

    @SubscribeMessage('send_message')
    async handleMessage(@MessageBody() data: { userId: string, content: string }): Promise<WsResponse<Message>> {
        const message = await this.chatService.sendMessage(data.userId, data.content);
        return { event: 'new_message', data: message };
    }
}
