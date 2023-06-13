import { Injectable } from '@nestjs/common';
import { RequiredFieldsException } from '../../exceptions/requiredFields.exceptions';
import { GameRepository } from '../../domain/repositories/game.respository';
import { Game } from '../../domain/entities/game.entity';

@Injectable()
export class CreateGameUseCase {
  constructor(private gameRepository: GameRepository) { }

  execute(game: Game) {
    if (!game.description || !game.console || !game.name || !game.price || !game.stock) {
      throw new RequiredFieldsException();
    }
    if (game.price <= 0 || game.stock <= 0) {
      throw new RequiredFieldsException();
    }
    return this.gameRepository.create(game);
  }
}
