import { GameController } from "./game.controller";


describe('GameController', () => {
    let gameController: GameController;

    let createGameUseCase: any = {
        execute: jest.fn()
    };

    let getGamesUseCase: any = {
        execute: jest.fn()
    };

    let getGamesByIdUseCase: any = {
        execute: jest.fn()
    };

    let updateGameUseCase: any = {
        execute: jest.fn()
    };
    let deleteGameUseCase: any = {
        execute: jest.fn()
    };
    beforeEach(() => {
        gameController = new GameController(createGameUseCase, getGamesByIdUseCase, updateGameUseCase, getGamesUseCase, deleteGameUseCase);
    });

    describe('createGames', () => {

        test('Should call CreateGameUseCase when it creates game', async () => {
            const gameMock: any = {
                name: 'mock'
            };

            await gameController.createGame(gameMock);

            expect(createGameUseCase.execute).toHaveBeenCalledWith(gameMock);
        });
    });

    describe('getGames', () => {

        test('Should call GetGames when it gets games', async () => {
            await gameController.getGames();
            expect(getGamesUseCase.execute).toHaveBeenCalled();
        });
    });


    describe('getGamesById', () => {
        const game: any = {
            console: 'switch',
            name: 'mock',
            stock: 100,
            description: 'description',
            price: 300,
            id: 1,
        }

        test('Should call GetGamesById when it gets one game', async () => {
            await gameController.getGame(game.id);
            expect(getGamesByIdUseCase.execute).toHaveBeenCalledWith(game.id);
        });
    });

    describe('UpdateGame', () => {
        const game: any = {
            console: 'switch',
            name: 'mock',
            stock: 100,
            description: 'description',
            price: 300,
            id: 1,
        }

        test('Should call UpdateGame when it update one game', async () => {
            await gameController.updateGame(game);
            expect(updateGameUseCase.execute).toHaveBeenCalledWith(game);
        });
    });


    describe('deleteGame', () => {
        const game: any = {
            console: 'switch',
            name: 'mock',
            stock: 100,
            description: 'description',
            price: 300,
            id: 1,
        };

        test('Should call DeleteGame when it delete one game', async () => {
            await gameController.deteleGame(game.id);
            expect(deleteGameUseCase.execute).toHaveBeenCalledWith(game.id);
        });
    });
});
