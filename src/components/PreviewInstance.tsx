import React from 'react'
import styles from './PreviewInstance.css'
import { PreviewAction, Instance } from '../types'

interface Props {
  instance: Instance
  onPreview: PreviewAction
}


export default class PreviewInstance extends React.Component<Props> {
  state = {
    previewRestarted: false,
  }

  handlePreviewButtonClicked = () => {
    this.props.onPreview(this.props.instance)
    this.setState({
      previewRestarted: true,
    })
    setTimeout(() => {
      this.setState({
        previewRestarted: false,
      })
    }, 5000)
  }

  private renderLinks() {
    const { instance } = this.props
    if (!(instance.url)) {
      return null
    }
    return (
      <>
        {` `}
        {instance.url && (
            <a target="_blank" rel="noopener" className={styles.link} href={instance.url}>Open Preview</a>
        )}
      </>
    )
  }

  render() {
    const { instance } = this.props
    const { previewRestarted } = this.state
    return (
      <li className={styles.root}>
        <div className={styles.status}>
          <h4 className={styles.title}>
            {instance.title}
            {previewRestarted && <span className={styles.instanceStatus}>Preview instance updated</span>}
          </h4>
          {this.renderLinks()}
        </div>
        {instance.id && (
          <div className={styles.actions}>
            <button className={styles.defaultButton} onClick={this.handlePreviewButtonClicked}>
              Update Preview
            </button>
          </div>
        )}
      </li>
    )
  }
}
