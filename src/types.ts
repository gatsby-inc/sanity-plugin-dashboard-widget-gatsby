export interface InstanceWidgetOption {
  name?: string
  hostname?: string
}
export interface WidgetOptions {
  instances: InstanceWidgetOption[]
}

export interface Instance {
  name?: string
  url?: string
}

export interface Props {
  instances?: Instance[]
  isLoading: boolean
}
