import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt.payload';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
        const { email, password } = loginDto;
      
        const user = await this.validateUser(email, password);
        if (!user) {
          throw new UnauthorizedException('Invalid credentials');
        }
      
        const payload: JwtPayload = { userId: user.userId, email: user.email };
        const accessToken = await this.jwtService.sign(payload);
        return { accessToken };
      }

      async validateUser(email: string, password: string): Promise<any> {
        const mockUser = {
          userId: 'abc123',
          email: 'user@example.com',
          password: '123456',
        };
      
        if (email === mockUser.email && password === mockUser.password) {
          return mockUser;
        }
      
        return null;
      }
}
