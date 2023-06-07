import { Injectable } from "@nestjs/common";
import { GameRepository } from "src/dominio/repositories";


@Injectable()
export class DeleteGameUseCase {

    constructor (private gameRepository: GameRepository){
    }

    excecute (id: number){

        return this.gameRepository.delete(id);
    }
}
