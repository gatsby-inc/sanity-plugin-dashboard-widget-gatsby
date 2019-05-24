import React from 'react'
import AnchorButton from 'part:@sanity/components/buttons/anchor'
import styles from './GatsbyWidget.css'
import { Props } from '../types'
import SiteList from './PreviewList'

export default class GatsbyWidget extends React.Component<Props> {
  render() {
    const gatsbySitesUrl = 'https://gatsbyjs.com/dashboard/sites'
    const { title, description, isLoading, sites, onDeploy } = this.props

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </header>
        <div className={styles.content}>
          {description && (
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
          )}
          <SiteList isLoading={isLoading} onDeploy={onDeploy} sites={sites} />
        </div>
        <div className={styles.footer}>
          <AnchorButton
            disabled={isLoading}
            href={isLoading ? undefined : gatsbySitesUrl}
            bleed
            color="primary"
            kind="simple"
          >
            Manage Preview instances at Gatsby
          </AnchorButton>
        </div>
      </div>
    )
  }
}
