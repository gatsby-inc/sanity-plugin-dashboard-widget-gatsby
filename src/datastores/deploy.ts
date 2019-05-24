import { of } from 'rxjs'
import { map } from 'rxjs/operators'
import { statusCodeRequest } from '../http/statusCodeRequest'
import { jsonRequest } from '../http/jsonRequest'
import { Site } from '../types'

interface Deployment {
  id: string
}

export function deploy(site: Site) {
  if (!site.id) {
    return of(new Error('Site missing siteId'))
  }
  return statusCodeRequest(`https://webhook.staging.gtsb.io/hooks/data_source/${site.id}`, {
    method: 'POST'
  }).pipe(map(result => ({ result, site })))
}
