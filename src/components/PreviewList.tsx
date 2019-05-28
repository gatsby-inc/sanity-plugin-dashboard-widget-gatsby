import Spinner from 'part:@sanity/components/loading/spinner'
import React from 'react'
import styles from './GatsbyWidget.css'
import { PreviewAction, Instance } from '../types'
import PreviewInstance from './PreviewInstance'

interface Props {
  isLoading: boolean
  instances?: Instance[]
  onPreview: PreviewAction
}

export default class PreviewList extends React.Component<Props> {
  render() {
    const { isLoading, onPreview, instances } = this.props
    if (isLoading) {
      return <Spinner center message="Loading instances..." />
    }
    if (!instances || (instances && instances.length === 0)) {
      return (
        <div className={styles.error}>
          No Preview instances are defined in the widget options. Please check your config.
        </div>
      )
    }
    return (
      <ul className={styles.instances}>
        {instances.map((instance, index) => {
          return (
            <PreviewInstance onPreview={onPreview} instance={instance} key={`instance-${index}`} />
          )
        })}
      </ul>
    )
  }
}
