import { Module } from '@nestjs/common';
import { GameRepository } from './repositories';
import { Providers } from './providers';
import { databaseProviders } from './dataSource';

@Module({
  imports: [],
  providers: [...Providers, GameRepository, ...databaseProviders],
  exports: [GameRepository]
})
export class DomainModule { }