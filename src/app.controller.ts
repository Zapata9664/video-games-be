import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/games')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getGames(): any {
    return this.appService.getGames();
  }
}