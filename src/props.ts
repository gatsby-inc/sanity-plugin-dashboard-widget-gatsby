import { of } from 'rxjs'
import { map, startWith } from 'rxjs/operators'
import { WidgetOptions } from './types'

const INITIAL_PROPS = {
  sites: [],
  isLoading: true
}

export const props$ = (options: WidgetOptions) => {
  const sites = (options.sites || []).map(site => ({
    siteUrl: site.siteUrl
  }))

  return of(sites).pipe(
    map(sites => {
      return {
        sites,
        isLoading: false
      }
    }),
    startWith(INITIAL_PROPS)
  )
}
