import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt.payload';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    async login(userId: string): Promise<{ accessToken: string }> {
        const payload: JwtPayload = { userId };
        const accessToken = await this.jwtService.sign(payload);
        return { accessToken };
    }

    async validateUser(userId: string, password: string): Promise<any> {
        if (userId === 'testUser' && password === 'testPassword') {
            return { userId };
        }
        return null;
    }
}
