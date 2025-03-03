import {
  Body,
  Controller,
  HttpStatus,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { SETTINGS } from 'src/app.utils';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/register')
  async doUserRegistration(
    @Body(SETTINGS.VALIDATIONPIPE)
    userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    console.log(userRegister);
    return await this.userService.doUserRegistration(userRegister);
  }
}
