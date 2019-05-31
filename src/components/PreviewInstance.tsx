import Spinner from 'part:@sanity/components/loading/spinner'
import React from 'react'
import styles from './GatsbyWidget.css'
import { Instance } from '../types'
import GatsbyLogo from "./GatsbyLogo"

interface Props {
  isLoading: boolean
  instance?: Instance
}

export default class PreviewList extends React.Component<Props> {
  render() {
    const { isLoading, instance } = this.props

    if (isLoading) {
      return <Spinner center message="Loading instances..." />
    }
    if (!instance || (instance && !instance.name)) {
      return (
        <div className={styles.error}>
          Preview instance is not defined in the widget options. Please check your config.
        </div>
      )
    }
    return (
      <>
      <a target="_blank" rel="noopener" className={styles.link} href={instance.url}>
        <button className={styles.defaultButton}>
          Open Preview
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
