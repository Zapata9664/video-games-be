import { Injectable } from "@nestjs/common";
import { GameRepository } from "../../domain/repositories";


@Injectable()
export class DeleteGameUseCase {
    constructor(private gameRepository: GameRepository) {
    }
    execute(id: number) {
        return this.gameRepository.delete(id);
    }
}
