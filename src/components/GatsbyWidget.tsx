import React from 'react'
import styles from './GatsbyWidget.css'
import { Props } from '../types'
import PreviewInstance from './PreviewInstance'

export default class GatsbyWidget extends React.Component<Props> {
  render() {
    const { isLoading, instances } = this.props

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Gatsby Cloud</h2>
        </header>
        <div className={styles.content}>
          <PreviewInstance isLoading={isLoading} instance={instances ? instances[0] : undefined} />
        </div>
      </div>
    )
  }
}
