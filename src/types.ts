export interface InstanceWidgetOption {
  instanceUrl?: string
  hostname?: string
}
export interface WidgetOptions {
  instances: InstanceWidgetOption[]
}

export interface Instance {
  instanceUrl?: string
}

export interface Props {
  instances?: Instance[]
  isLoading: boolean
}
