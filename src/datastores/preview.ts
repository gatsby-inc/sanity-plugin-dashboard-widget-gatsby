import { of } from 'rxjs'
import { map } from 'rxjs/operators'
import { statusCodeRequest } from '../http/statusCodeRequest'
import { jsonRequest } from '../http/jsonRequest'
import { Instance } from '../types'

interface Preview {
  id: string
}

export function preview(instance: Instance) {
  if (!instance.id) {
    return of(new Error('Instance missing instanceId'))
  }
  return statusCodeRequest(`https://webhook.staging.gtsb.io/hooks/data_source/${instance.id}`, {
    method: 'POST'
  }).pipe(map(result => ({ result, instance })))
}
