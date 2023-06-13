import { GameController } from "./game.controller";


describe('GameController', () => {
    let gameController: GameController;

    let createGameUseCase: any = {
        execute: jest.fn()
    };
    beforeEach(() => {
        gameController = new GameController(createGameUseCase, {} as any, {} as any, {} as any, {} as any);
    });

    describe('createGames', () => {
        test('Should call CreateGameUseCase when it creates game', async () => {
            // arrange
            const gameMock: any = {
                name: 'mock'
            };

            // act
            await gameController.createGame(gameMock);

            // expect
             expect(createGameUseCase.execute).toHaveBeenCalledWith(gameMock);

        });
    });
});

