import { from, merge, of } from 'rxjs'
import { createEventHandler } from 'react-props-stream'
import { catchError, map, startWith, switchMap, mergeMap, toArray } from 'rxjs/operators'
import { preview } from './datastores/preview'
import { Instance, WidgetOptions } from './types'
import { stateReducer$ } from './reducers'

const noop = () => void 0

const INITIAL_PROPS = {
  title: 'Gatsby Preview Instances',
  instances: [],
  isLoading: true,
  onPreview: noop
}

export const props$ = (options: WidgetOptions) => {
  const instances = (options.instances || []).map(instance => ({
    id: instance.instanceId,
    name: instance.name,
    title: instance.title,
    url: instance.name && `https://${instance.name}.gtsb.io/`
  }))
  const [onPreview$, onPreview] = createEventHandler<Instance>()
  const setPreviewActions$ = of(instances).pipe(
    map(instances => ({ type: 'setInstances', instances }))
  )
  const previewAction$ = onPreview$.pipe(map(instance => ({ type: 'preview/started', instance })))
  const previewResult$ = onPreview$.pipe(switchMap(instance => preview(instance)))
  const previewCompletedAction$ = previewResult$.pipe(
    map(
      result => ({ type: 'preview/completed', ...result }),
      catchError(error => of({ type: 'preview/failed', error }))
    )
  )

  merge(setPreviewActions$, previewAction$, previewCompletedAction$)
    .pipe(stateReducer$)
    .subscribe()

  return of(instances).pipe(
    map(instances => {
      return {
        instances,
        title: options.title || INITIAL_PROPS.title,
        description: options.description,
        isLoading: false,
        onPreview
      }
    }),
    startWith(INITIAL_PROPS)
  )
}
