import GatsbyWidget from '../src/components/GatsbyWidget'

describe('GatsbyWidget', () => {
  it('GatsbyWidget is instantiable', () => {
    expect(
      new GatsbyWidget({
        title: 'Gatsby preview',
        instances: [
          {
            title: 'Test website',
            id: '1234',
            name: 'Test',
            orgId: '123456'
          }
        ],
        isLoading: false,
        onPreview: () => void 0
      })
    ).toBeInstanceOf(GatsbyWidget)
  })
})
