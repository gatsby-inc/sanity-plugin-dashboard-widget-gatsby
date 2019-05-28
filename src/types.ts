export interface InstanceWidgetOption {
  instanceId: string
  name?: string
  title: string
  orgId: string
  hostname?: string
}
export interface WidgetOptions {
  title?: string
  description?: string
  instances: InstanceWidgetOption[]
}

export interface Instance {
  title: string
  name?: string
  id: string
  url?: string
  adminUrl?: string
  orgId: string
}

export interface Props {
  title?: string
  description?: string
  instances?: Instance[]
  isLoading: boolean
  onPreview: PreviewAction
}

export type PreviewAction = (site: Instance) => void
