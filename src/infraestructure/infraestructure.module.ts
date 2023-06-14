import { Module } from '@nestjs/common';
import { ApplicationModule } from 'application/application.module';
import { GameController } from './controllers/game.controller';


@Module({
  imports: [ApplicationModule],
  controllers: [GameController],
  providers: [],
  exports: []
})
export class InfraestructureModule { }
