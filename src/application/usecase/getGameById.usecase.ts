import { Injectable, NotFoundException } from "@nestjs/common";
import { GameRepository } from "src/dominio/repositories";


@Injectable()
export class GetGameByIdUseCase {

    constructor (private gameRepository: GameRepository){
    }

    excecute (id: number){

        if(!id){
            throw new NotFoundException("The game does not exist");
        }
        return this.gameRepository.findById(id);
    }
}
