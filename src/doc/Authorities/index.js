import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import nutImg from '../../img/nut.jpg'
import nonImg from '../../img/non.jpg'
import README from './README.md'



class Authorities extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authorities: null,
      img: null
    }
  }

  componentWillMount() {
    fetch(README).then((response) => response.text()).then((text) => {
      this.setState({ authorities: text })
    })
    this.setState({ img: { nut: nutImg, non: nonImg } })
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