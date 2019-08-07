export interface SiteWidgetOption {
  siteUrl?: string
  hostname?: string
}
export interface WidgetOptions {
  sites: SiteWidgetOption[]
}

export interface Site {
  siteUrl?: string
}

export interface Props {
  sites?: Site[]
  isLoading: boolean
}
