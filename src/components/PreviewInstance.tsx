import React from 'react'
import DefaultButton from 'part:@sanity/components/buttons/default'
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

  handlePreviewButtonClicked = (_: MouseEvent) => {
    this.props.onPreview(this.props.instance)
    this.setState({
      previewRestarted: true,
    })
  }
  private renderLinks() {
    const { instance } = this.props
    if (!(instance.url || instance.adminUrl)) {
      return null
    }
    return (
      <>
        {' ('}
        {instance.url && (
          <span>
            <a href={instance.url}>Preview</a>
          </span>
        )}
        {instance.adminUrl && (
          <span>
            , <a href={instance.adminUrl}>Gatsby Dashboard</a>
          </span>
        )}
         {')'}
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
            {this.renderLinks()}
          </h4>
          {previewRestarted && <div><i>Preview instance restarted</i></div>}
        </div>
        {instance.id && (
          <div className={styles.actions}>
            <DefaultButton inverted onClick={this.handlePreviewButtonClicked}>
              Preview
            </DefaultButton>
          </div>
        )}
      </li>
    )
  }
}
