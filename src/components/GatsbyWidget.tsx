import React from 'react'
import styles from './GatsbyWidget.css'
import { Props } from '../types'
import PreviewList from './PreviewList'

export default class GatsbyWidget extends React.Component<Props> {
  render() {
    const gatsbySitesUrl = 'https://gatsbyjs.com/dashboard/sites'
    const { title, description, isLoading, instances, onPreview } = this.props

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>Instant Preview Builds</p>
        </header>
        <div className={styles.content}>
          <PreviewList isLoading={isLoading} onPreview={onPreview} instances={instances} />
        </div>
        <div className={styles.footer}>
          <button
            className={styles.anchorButton}
            disabled={isLoading}
          >
            <a target="_blank" rel="noopener" className={styles.link} href={isLoading ? undefined : gatsbySitesUrl}>Manage Preview Instances at Gatsby</a>
          </button>
        </div>
      </div>
    )
  }
}
