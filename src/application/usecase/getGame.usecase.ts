import { Injectable } from "@nestjs/common";
import { GameRepository } from "src/dominio/repositories";


@Injectable()
export class GetGamesUseCase {

    constructor (private gameRepository: GameRepository){
    }
    
    excecute (){
        return this.gameRepository.findAll();
    }
}
