import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import README from './README.md'
import ContextDiagramImg from '../../../img/context_diagram.svg'

class ContextDiagram extends Component {
  constructor(props) {
    super(props)

    this.state = {
      md: null,
      img: null
    }
  }

  componentWillMount() {
    fetch(README).then((response) => response.text()).then((text) => {
      this.setState({ md: text })
    })
    this.setState({ img: ContextDiagramImg })
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

export default ContextDiagram