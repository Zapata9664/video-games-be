import { Injectable } from "@nestjs/common";
import { GameRepository } from "../../domain/repositories";


@Injectable()
export class GetGamesUseCase {

    constructor(private gameRepository: GameRepository) {
    }
    execute() {
        return this.gameRepository.findAll();
    }
}
