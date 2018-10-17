import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import README from './README.md'



class Authorities extends Component {
  constructor(props) {
    super(props)

    this.state = { authorities: null }
  }

  componentWillMount() {
    fetch(README).then((response) => response.text()).then((text) => {
      this.setState({ authorities: text })
    })
  }

  render() {
    return (
      <div className="markdown-body entry-content">
        <ReactMarkdown 
        source={this.state.authorities} 
        escapeHtml={false} />
      </div>
    )
  }
}

export default Authorities