import { AppModule } from "./app.module"

describe('AppModule', () => {
    test("Should be defined", async () => {
        expect(new AppModule()).toBeDefined()
    })
})