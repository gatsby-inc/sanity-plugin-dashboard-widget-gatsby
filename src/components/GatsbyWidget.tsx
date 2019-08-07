import React from 'react'
import styles from './GatsbyWidget.css'
import { Props } from '../types'
import Site from './Site'

export default class GatsbyWidget extends React.Component<Props> {
  render() {
    const { isLoading, sites } = this.props

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Gatsby Cloud</h2>
        </header>
        <div className={styles.content}>
          <Site isLoading={isLoading} site={sites ? sites[0] : undefined} />
        </div>
      </div>
    )
  }
}
