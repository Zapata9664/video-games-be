import { GameRepository } from "./game.respository";



describe('GameRepository', () => {
    let gameRepository: GameRepository;

    let repository: any;

    beforeEach(() => {
        repository = {
            save: jest.fn()
        };
        gameRepository = new GameRepository(repository);
    });

    describe('create', () => {

        test('should create game in repository ', () => {
            const game: any = {
                console: 'switch',
                name: 'mock',
                stock: 100,
                description: 'description',
                price: 300
            }
            gameRepository.create(game);

            expect(repository.save).toBeCalledWith(game);
        });

    });

});