import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Redirect,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ExistedUser } from './users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  // @HttpCode(HttpStatus.OK)
  // @Redirect('', HttpStatus.MOVED_PERMANENTLY)
  async login(@Request() req) {
    return this.authService.loginUser(req.body);
  }

  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  register(@Request() req): Promise<ExistedUser> {
    return this.authService.registerUser(req.body);
  }
}
