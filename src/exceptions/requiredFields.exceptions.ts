import { HttpException, HttpStatus } from "@nestjs/common";

export class RequiredFilesException extends HttpException {
    constructor () {
        super('The information should be complete', HttpStatus.BAD_REQUEST)
    }
}