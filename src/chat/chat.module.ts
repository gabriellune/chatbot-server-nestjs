import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageRepositoryImpl } from './infrastructure/database/message.repository.impl';
import { MessageSchema } from './infrastructure/database/message.schema';
import { MessageRepository } from './domain/interfaces/message.repository';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }])],
    providers: [
        {
            provide: 'MessageRepository',
            useClass: MessageRepositoryImpl,
        },
    ],
    exports: ['MessageRepository'],
})
export class ChatModule { }
