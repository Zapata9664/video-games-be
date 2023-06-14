import { Injectable } from '@nestjs/common';
import { Game } from '../../domain/entities';
import { GameRepository } from '../../domain/repositories';
import { RequiredFieldsException } from '../../exceptions';


@Injectable()
export class UpdateGameUseCase {
  constructor(private gameRepository: GameRepository) { }

  execute(game: Game) {
    if (!game.description || !game.console || !game.name || !game.price || !game.stock) {
      throw new RequiredFieldsException();
    };
    if (game.price <= 0 || game.stock <= 0) {
      throw new RequiredFieldsException();
    };
    return this.gameRepository.update(game);
  };
};
