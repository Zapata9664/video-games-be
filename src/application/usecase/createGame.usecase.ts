import { Injectable } from '@nestjs/common';
import { RequiredFilesException } from '../../exceptions/requiredFields.exceptions';
import { GameRepository } from '../../dominio/repositories/game.respository';
import { Game } from '../../dominio/entities/game.entity';

@Injectable()
export class CreateGameUseCase {
  constructor(private gameRepository: GameRepository) {}

  excecute(game: Game) {
    if (!game.description || !game.console || !game.name || !game.price || !game.stock) {
        throw new RequiredFilesException();
      }
      if (game.price <= 0 || game.stock <= 0) {
        throw new RequiredFilesException();
      }
    return this.gameRepository.create(game);
  }
}
