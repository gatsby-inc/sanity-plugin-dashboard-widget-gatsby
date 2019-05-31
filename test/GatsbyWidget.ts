import GatsbyWidget from '../src/components/GatsbyWidget'

describe('GatsbyWidget', () => {
  it('GatsbyWidget is instantiable', () => {
    expect(
      new GatsbyWidget({
        instances: [
          {
            name: 'Test'
          }
        ],
        isLoading: false
      })
    ).toBeInstanceOf(GatsbyWidget)
  })
})
