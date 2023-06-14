import { UpdateGameUseCase } from "./updateGame.usecase";
import { RequiredFieldsException } from "../../exceptions";


describe('UpdateGameUseCase', () => {

    let upadateGameUseCase: UpdateGameUseCase;

    let gameRepository: any;

    beforeEach(() => {

        gameRepository = {
            update: jest.fn()
        };
        upadateGameUseCase = new UpdateGameUseCase(gameRepository);
    });

    test('Should thrown RequiredFieldsException when name is missing ', async () => {
        const game: any = {
            price: 3000,
            stock: 220,
            description: "description",
            console: "Switch",
            rating: 5
        };
        try {
            await upadateGameUseCase.execute(game);
        } catch (e) {
            expect(e).toEqual(new RequiredFieldsException());
        };
        expect(gameRepository.update).not.toHaveBeenCalled();

    });

    test('Should thrown RequiredFieldsException when description is missing ', async () => {
        const game: any = {
            name: 'mock',
            price: 3000,
            stock: 220,
            console: "Switch",
            rating: 5,
        };
        try {
            await upadateGameUseCase.execute(game);
        } catch (e) {
            expect(e).toEqual(new RequiredFieldsException());
        };
        expect(gameRepository.update).not.toHaveBeenCalled();

    });

    test('Should thrown RequiredFilesException when price is missing ', async () => {
        const game: any = {
            name: 'mock',
            stock: 220,
            console: "Switch",
            rating: 5,
            description: 'description'
        };
        try {
            await upadateGameUseCase.execute(game);
        } catch (e) {
            expect(e).toEqual(new RequiredFieldsException());
        };
        expect(gameRepository.update).not.toHaveBeenCalled();

    });

    test('Should thrown RequiredFilesException when stock is zero ', async () => {
        const game: any = {
            console: 'switch',
            name: 'mock',
            stock: -1,
            description: 'description',
            price: 300
        };
        try {
            await upadateGameUseCase.execute(game);
        } catch (e) {
            expect(e).toEqual(new RequiredFieldsException());
        };
        expect(gameRepository.update).not.toHaveBeenCalled();

    });

    test('Should thrown RequiredFilesException when console is missing ', async () => {
        const game: any = {
            name: 'mock',
            stock: 100,
            description: 'description',
            price: 300
        };
        try {
            await upadateGameUseCase.execute(game);
        } catch (e) {
            expect(e).toEqual(new RequiredFieldsException());
        };
        expect(gameRepository.update).not.toHaveBeenCalled();

    });

    test('Should update game when it sends correct fields ', async () => {
        const game: any = {
            console: 'switch',
            name: 'mock',
            stock: 100,
            description: 'description',
            price: 300
        };
        await upadateGameUseCase.execute(game);

        expect(gameRepository.update).toHaveBeenCalledWith(game);

    });
});
