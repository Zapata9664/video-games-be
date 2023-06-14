import { GameRepository } from "./game.respository";
import { GameDoesNotExistException } from "../../exceptions";



describe('GameRepository', () => {

    let gameRepository: GameRepository;

    let repository: any;

    beforeEach(() => {
        repository = {
            save: jest.fn(),
            findOneBy: jest.fn(),
            find: jest.fn(),
            remove: jest.fn(),
            findById: jest.fn(),
        };
        gameRepository = new GameRepository(repository);
    });

    describe('create', () => {

        test('should create game in repository ', async () => {
            const game: any = {
                console: 'switch',
                name: 'mock',
                stock: 100,
                description: 'description',
                price: 300
            };
            await gameRepository.create(game);

            expect(repository.save).toBeCalledWith(game);
        });
    });

    describe('findById', () => {
        const game: any = {
            console: 'switch',
            name: 'mock',
            stock: 100,
            description: 'description',
            price: 300,
            id: 1,
        };
        test('Should find a game if the id exits', async () => {
            try {
                await gameRepository.findById(game.id)
            } catch (e) {
                expect(e).toEqual(new GameDoesNotExistException());
            };
            expect(repository.findOneBy).not.toHaveBeenNthCalledWith(game.id);
        });
    });

    describe('findAll', () => {
        test('should find all the games ', async () => {
            await gameRepository.findAll();

            expect(repository.find).toBeCalledWith();
        });

    });

    describe('delete', () => {
        const game: any = {
            console: 'switch',
            name: 'mock',
            stock: 100,
            description: 'description',
            price: 300,
            id: 1,
        }
        test('Should delete a game if the id exits', async () => {
            await gameRepository.delete(game.id);

            expect(repository.remove).toBeCalled();
        });
    });

    describe('update', () => {
        test('Should update a game if the id exits', async () => {
            const game: any = {
                console: 'switch',
                name: 'mock',
                stock: 100,
                description: 'description',
                price: 300,
                id: 1,
                rating: 5
            };

            gameRepository.findById = jest.fn().mockReturnValue(Promise.resolve({ id: 1 }));

            await gameRepository.update(game);

            expect(gameRepository.findById).toHaveBeenCalledWith(game.id);
            expect(repository.save).toBeCalledWith(game);

        });
    });
});