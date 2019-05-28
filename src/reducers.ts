import { scan } from 'rxjs/operators'
import { Instance } from './types'

interface Preview {
  id: string
}

interface Action {
  type: string
  instances?: Instance[]
  instance?: Instance
  error?: Error
  previews?: Preview[]
}

interface State {
  instances: Instance[]
  action: Action
}

export const stateReducer$ = scan((state: State, action: Action) => {
  switch (action.type) {
    case 'setInstances':
      return { ...state, instances: action.instances || [] }
    case 'preview/started':
      return {
        ...state,
        instances: state.instances.map((instance: Instance) => {
          if (action.instance && instance.id === action.instance.id) {
            return { ...instance }
          }
          return instance
        })
      }
    case 'preview/failed':
      return {
        ...state,
        error: action.error
      }
    case 'preview/completed':
      return {
        ...state,
        instances: state.instances.map((instance: Instance) => {
          if (action.instance && instance.id === action.instance.id) {
            return { ...instance, error: action.error }
          }
          return instance
        })
      }
    default:
      return state
  }
})
