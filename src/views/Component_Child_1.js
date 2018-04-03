import React, { Component } from 'react'
import log from './util.js'

class Component_Child_1 extends Component {
  constructor(props) {
    super(props)
    log.error('Child_1 [constructor]');
    this.state = {
      count: 0
    }
  }

  componentWillMount () {
    log.error('Child_1 [componentWillMount]');
  }
  componentDidMount () {
    log.error('Child_1 [componentDidMount]');
  }
  componentWillReceiveProps () {
    log.error('Child_1 [componentWillReceiveProps]');
  }
  shouldComponentUpdate () {
    log.error('Child_1 [shouldComponentUpdate]');
    return true;
  }
  componentWillUpdate () {
    log.error('Child_1 [componentWillUpdate]');
  }
  componentDidUpdate () {
    log.error('Child_1 [componentDidUpdate]');
  }
  componentWillUnmount () {
    log.error('Child_1 [componentWillUnmount]');
  }

  add () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    log.error('Child_1 [render]');
    return (
      <fieldset>
        <legend>Component_Child_1</legend>
        <div>
          <button onClick={this.add.bind(this)}>this.state.count + 1</button><br />
        </div>
      </fieldset>
    )
  }
}

export default Component_Child_1
