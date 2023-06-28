import { DomainModule } from './domain.module';

describe('DomainModule', () => {
    test("Should be defined", async () => {
        expect(new DomainModule()).toBeDefined()
    })
})
