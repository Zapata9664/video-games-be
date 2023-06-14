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

    test('Should show the specific game if the id exist', async () => {
        const game: any = {
            console: 'switch',
            name: 'mock',
            stock: 100,
            description: 'description',
            price: 300,
            id: 1,
        };
        await getGameByIdUseCase.execute(game.id);

        expect(gameRepository.findById).toBeCalledWith(game.id);
    });
});
