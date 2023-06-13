import { GetGamesUseCase } from "./getGame.usecase";

describe('GetGamesUseCase', () => {

    let getGameUseCase: GetGamesUseCase;
    let gameRepository: any;

    beforeEach(() => {
        gameRepository = {
            findAll: jest.fn()
        };
        getGameUseCase = new GetGamesUseCase(gameRepository);
    });
    test('Should show the games if they exist', () => {
        getGameUseCase.execute();
        expect(gameRepository.findAll).toHaveBeenCalledWith();
    });
});