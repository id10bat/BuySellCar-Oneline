import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import RelationSchemaImg from '../../../img/Relation_Schema.PNG'
import README from './README.md'



class RelationSchema extends Component {
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
    this.setState({ img: RelationSchemaImg })
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

export default RelationSchema