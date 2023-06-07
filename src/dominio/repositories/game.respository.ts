import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Game } from '../entities/game.entity';
import { GameDoesNotExistException } from  '../../exceptions/gameDoesNotExist.exceptions';

@Injectable()
export class GameRepository {
  constructor(
    @Inject('GAME_REPOSITORY')
    private gameRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gameRepository.find();
  }

  async findById(id: number) {
    const gameFiltered = await this.gameRepository.findOneBy({ id });
    if (gameFiltered === null) {
      throw new GameDoesNotExistException();
    }
    return gameFiltered;
  }

  async create(game: Game) {
    const newGame = new Game();
    newGame.console = game.console;
    newGame.name = game.name;
    newGame.price = game.price;
    newGame.rating = game.rating;
    newGame.stock = game.stock;
    newGame.description = game.description;

    await this.gameRepository.save(newGame);
    return newGame;
  }

  async update(game: Game) {
    const gameFiltered = await this.findById(game.id);
    gameFiltered.console = game.console;
    gameFiltered.name = game.name;
    gameFiltered.price = game.price;
    gameFiltered.rating = game.rating;
    gameFiltered.stock = game.stock;
    gameFiltered.description = game.description;
    this.gameRepository.save(gameFiltered);
    return gameFiltered;
  }

  async delete(id: number) {
    const gameFiltered = await this.findById(id);
    this.gameRepository.remove(gameFiltered);
  }
}
