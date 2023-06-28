import { InfraestructureModule} from "./infraestructure.module"

describe('InfraecstrucureModule', () => {
    test("Should be defined", async () => {
        expect(new InfraestructureModule()).toBeDefined()
    })
})