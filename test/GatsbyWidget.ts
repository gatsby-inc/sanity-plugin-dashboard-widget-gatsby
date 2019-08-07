import GatsbyWidget from '../src/components/GatsbyWidget'

describe('GatsbyWidget', () => {
  it('GatsbyWidget is instantiable', () => {
    expect(
      new GatsbyWidget({
        sites: [
          {
            siteUrl: 'www.sanity.io'
          }
        ],
        isLoading: false
      })
    ).toBeInstanceOf(GatsbyWidget)
  })
})
