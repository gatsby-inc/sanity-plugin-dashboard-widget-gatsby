import Spinner from 'part:@sanity/components/loading/spinner'
import React from 'react'
import styles from './GatsbyWidget.css'
import { Site } from '../types'
import GatsbyLogo from "./GatsbyLogo"

interface Props {
  isLoading: boolean
  site?: Site
}

export default class SiteList extends React.Component<Props> {
  render() {
    const { isLoading, site } = this.props

    if (isLoading) {
      return <Spinner center message="Loading site..." />
    }
    if (!site || (site && !site.siteUrl)) {
      return (
        <div className={styles.error}>
          Site is not defined in the widget options. Please check your config.
        </div>
      )
    }
    return (
      <>
      <a target="_blank" rel="noopener" className={styles.link} href={site.siteUrl}>
        <button className={styles.defaultButton}>
          Open site
        </button>
      </a>
      <div className={styles.poweredBy}>
        <p>Powered by: </p>
        <GatsbyLogo />
      </div>
    </>
    )
  }
}
