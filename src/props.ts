import { of } from 'rxjs'
import { map, startWith } from 'rxjs/operators'
import { WidgetOptions } from './types'

const INITIAL_PROPS = {
  instances: [],
  isLoading: true
}

export const props$ = (options: WidgetOptions) => {
  const instances = (options.instances || []).map(instance => ({
    name: instance.name,
    url: instance.name && `https://${instance.name}.gtsb.io/`
  }))

  return of(instances).pipe(
    map(instances => {
      return {
        instances,
        isLoading: false
      }
    }),
    startWith(INITIAL_PROPS)
  )
}
