import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Game } from 'src/dominio/entities';
import { GameRepository } from 'src/dominio/repositories';
import { RequiredFilesException } from '../../exceptions';

@Injectable()
export class UpdateGameUseCase {
  constructor(private gameRepository: GameRepository) {}

  excecute(game: Game) {
    if (!game.description || !game.console || !game.name || !game.price || !game.stock) {
        throw new RequiredFilesException();
      }
      if (game.price <= 0) {
        throw new RequiredFilesException();
      }
      if (game.stock <= 0) {
        throw new RequiredFilesException();
      }
    return this.gameRepository.update(game);
  }
}
