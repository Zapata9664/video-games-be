import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { CreateGameUseCase, GetGameByIdUseCase, GetGamesUseCase, UpdateGameUseCase, DeleteGameUseCase } from 'src/application/';
import { Game } from 'src/dominio/entities';

@Controller('/game')
export class GameController {
  constructor(private readonly createGameUseCase: CreateGameUseCase, private readonly getGameByIdUseCase: GetGameByIdUseCase, private readonly updateGameUseCase: UpdateGameUseCase, private readonly getGameUseCase: GetGamesUseCase, private readonly deleteGamesUseCase: DeleteGameUseCase) {}

  @Post()
  createGames(@Body() game: Game) {
    return this.createGameUseCase.excecute(game);
  }

  @Get()
   async getGames (){
    return this.getGameUseCase.excecute();
   }

  @Get('/:id')
  async getGame (@Param('id') id: number) {
    return this.getGameByIdUseCase.excecute(id)
  }

  @Put()
  async updateGame (@Body() game: Game) {
    return this.updateGameUseCase.excecute(game)
  }

  @Delete('/:id')
  async deteleGame(@Param('id') id: number) {
    return this.deleteGamesUseCase.excecute(id)
  }
}