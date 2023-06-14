import { Module } from '@nestjs/common';
import { DomainModule } from 'domain/domain.module';
import { CreateGameUseCase, GetGameByIdUseCase, UpdateGameUseCase, GetGamesUseCase, DeleteGameUseCase } from './usecase';


@Module({
  imports: [DomainModule],
  controllers: [],
  providers: [CreateGameUseCase, GetGameByIdUseCase, UpdateGameUseCase, GetGamesUseCase, DeleteGameUseCase],
  exports: [CreateGameUseCase, GetGameByIdUseCase, UpdateGameUseCase, GetGamesUseCase, DeleteGameUseCase]
})
export class ApplicationModule { };
