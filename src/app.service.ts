import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getGames(): any {
    return { name: 'Hello World!', token: 'token', };
  }    
} 
