import React from 'react'
import Widget from '../src/Widget'

describe('Widget', () => {
  it('works', () => {
    const options = {"instances": [], "title": "test"}
    const widget = <Widget {...options} />
    expect(widget.props).toEqual(options)
  })
})
