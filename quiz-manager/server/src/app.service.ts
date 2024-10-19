import { Injectable } from '@nestjs/common';

@Injectable() //can you these dependency injection on other module
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSomething(): string {
    return 'Something can be sent back!'
  }
}
