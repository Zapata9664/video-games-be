import { DeleteGameUseCase } from "./deleteGame.usecase";


describe('DeleteGameUseCase', () => {

    let deleteGameUseCase: DeleteGameUseCase;

    let gameRepository: any;

    beforeEach(() => {

        gameRepository = {
            delete: jest.fn()
        };
        deleteGameUseCase = new DeleteGameUseCase(gameRepository);
    });

    test('Should delete a game when the ID exist', async () => {
        const game: any = {
            console: 'switch',
            name: 'mock',
            stock: 100,
            description: 'description',
            price: 300,
            id: 1,
        };
        await deleteGameUseCase.execute(game.id);

        expect(gameRepository.delete).toHaveBeenCalledWith(game.id);
    });
});