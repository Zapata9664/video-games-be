import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateGameUseCase, GetGameByIdUseCase, GetGamesUseCase, UpdateGameUseCase, DeleteGameUseCase } from '../../application';
import { Game } from '../../domain/entities';

@Controller('/game')
export class GameController {
  constructor(private readonly createGameUseCase: CreateGameUseCase, private readonly getGameByIdUseCase: GetGameByIdUseCase, private readonly updateGameUseCase: UpdateGameUseCase, private readonly getGameUseCase: GetGamesUseCase, private readonly deleteGamesUseCase: DeleteGameUseCase) { }

  @Post()
  createGame(@Body() game: Game) {
    return this.createGameUseCase.execute(game);
  }

  @Get()
  async getGames() {
    return this.getGameUseCase.execute();
  }

  @Get('/:id')
  async getGame(@Param('id') id: number) {
    return this.getGameByIdUseCase.execute(id)
  }

  @Put()
  async updateGame(@Body() game: Game) {
    return this.updateGameUseCase.execute(game)
  }

  @Delete('/:id')
  async deteleGame(@Param('id') id: number) {
    return this.deleteGamesUseCase.execute(id)
  }
}