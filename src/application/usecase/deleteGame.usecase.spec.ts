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

    test('Should delete a game when the ID exist', () => {
        const id: number = 2;
        deleteGameUseCase.execute(id);

        expect(gameRepository.delete).toHaveBeenCalledWith(id);
    });
});