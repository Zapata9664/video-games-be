import { HttpException, HttpStatus } from "@nestjs/common";

export class RequiredFieldsException extends HttpException {
    constructor() {
        super('The information should be complete', HttpStatus.BAD_REQUEST);
    };
};