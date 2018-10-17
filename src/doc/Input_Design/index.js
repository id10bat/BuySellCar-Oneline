import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import README from './README.md'

class InputDesign extends Component {
  constructor(props) {
    super(props)

    this.state = { md: null }
  }

  componentWillMount() {
    fetch(README).then((response) => response.text()).then((text) => {
      this.setState({ md: text })
    })
  }

  render() {
    return (
      <div className="markdown-body entry-content">
        <ReactMarkdown 
        source={this.state.md} 
        escapeHtml={false} />
      </div>
    )
  }
}

export default InputDesign