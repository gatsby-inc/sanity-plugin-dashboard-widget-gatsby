import React from 'react'
import DefaultButton from 'part:@sanity/components/buttons/default'
import styles from './PreviewInstance.css'
import { PreviewAction, Instance } from '../types'

interface Props {
  instance: Instance
  onPreview: PreviewAction
}


export default class PreviewInstance extends React.Component<Props> {
  private badge = React.createRef<HTMLImageElement>()
  private imgInterval?: any

  componentDidMount() {
    this.imgInterval = window.setInterval(() => {
      this.updateImage()
    }, 10000)
  }

  componentWillUnmount() {
    window.clearInterval(this.imgInterval)
  }

  handlePreviewButtonClicked = (_: MouseEvent) => {
    this.props.onPreview(this.props.instance)
    setTimeout(() => {
      this.updateImage()
    }, 1000)
  }

  private getImageUrl() {
    const { instance } = this.props
    return `https://api.netlify.com/api/v1/badges/${instance.id}/deploy-status`
  }

  private updateImage() {
    const image = this.badge && this.badge.current
    if (image) {
      image.src = `${this.getImageUrl()}?${new Date().getTime()}`
    }
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
    return (
      <li className={styles.root}>
        <div className={styles.status}>
          <h4 className={styles.title}>
            {instance.title}
            {this.renderLinks()}
          </h4>
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
