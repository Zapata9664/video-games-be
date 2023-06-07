import { HttpException, HttpStatus } from "@nestjs/common";

export class GameDoesNotExistException extends HttpException {
    constructor () {
        super('the game does not exist', HttpStatus.BAD_REQUEST)
    }
}