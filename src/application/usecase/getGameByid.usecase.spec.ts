import { GetGameByIdUseCase } from "./getGameById.usecase";


describe('GetGameBiIdUseCase', () => {
    let getGameByIdUseCase: GetGameByIdUseCase;
    let gameRepository: any;

    beforeEach(() => {
        gameRepository = {
            findById: jest.fn()
        };
        getGameByIdUseCase = new GetGameByIdUseCase(gameRepository);
    });

    test('Should show the specific game if the id exist', () => {
        const id: number = 2;
        getGameByIdUseCase.execute(id);

        expect(gameRepository.findById).toBeCalledWith(id);
    });
});