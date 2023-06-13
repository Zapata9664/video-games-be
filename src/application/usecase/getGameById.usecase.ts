import { Injectable, NotFoundException } from "@nestjs/common";
import { GameRepository } from "../../domain/repositories";


@Injectable()
export class GetGameByIdUseCase {
    constructor(private gameRepository: GameRepository) {
    };
    execute(id: number) {
        return this.gameRepository.findById(id);
    };
};
