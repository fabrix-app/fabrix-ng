import { NgFabrixModule } from './'

describe('NgFabrixModule', () => {
  let ngFabrixModule: NgFabrixModule

  beforeEach(() => {
    ngFabrixModule = new NgFabrixModule()
  })

  it('should create an instance', () => {
    expect(ngFabrixModule).toBeTruthy()
  })
})
