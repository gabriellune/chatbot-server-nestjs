import { Controller, Post, Get, Param, Body, Delete } from '@nestjs/common';
import { ChatService } from '../application/chat.service';
import { Message } from '../domain/entities/message.entity';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) { }

    @Post('send')
    async sendMessage(
        @Body('userId') userId: string,
        @Body('content') content: string,
    ): Promise<Message> {
        return this.chatService.sendMessage(userId, content);
    }

    @Get('messages')
    async getMessages(): Promise<Message[]> {
        return this.chatService.getMessages();
    }

    @Get('messages/:id')
    async getMessageById(@Param('id') id: string): Promise<Message | null> {
        return this.chatService.getMessageById(id);
    }

    @Delete('messages/:id')
    async deleteMessage(@Param('id') id: string): Promise<void> {
        return this.chatService.deleteMessage(id);
    }
}
