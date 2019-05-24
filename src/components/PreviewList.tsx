import Spinner from 'part:@sanity/components/loading/spinner'
import React from 'react'
import styles from './GatsbyWidget.css'
import { DeployAction, Site } from '../types'
import SiteItem from './PreviewInstance'

interface Props {
  isLoading: boolean
  sites?: Site[]
  onDeploy: DeployAction
}

export default class PreviewList extends React.Component<Props> {
  render() {
    const { isLoading, onDeploy, sites } = this.props
    if (isLoading) {
      return <Spinner center message="Loading sites…" />
    }
    if (!sites || (sites && sites.length === 0)) {
      return (
        <div className={styles.error}>
          No sites are defined in the widget options. Please check your config.
        </div>
      )
    }
    return (
      <ul className={styles.sites}>
        {sites.map((site, index) => {
          return (
            <SiteItem onDeploy={onDeploy} site={site} key={`site-${index}`} />
          )
        })}
      </ul>
    )
  }
}
