import React, { Component } from 'react'
import log from './util.js'

class Component_Child_2 extends Component {
  constructor(props) {
    super(props)
    log.warn('Child_2 [constructor]');
    this.state = {
      count: 0
    }
  }

  componentWillMount () {
    log.warn('Child_2 [componentWillMount]');
  }
  componentDidMount () {
    log.warn('Child_2 [componentDidMount]');
  }
  componentWillReceiveProps () {
    log.warn('Child_2 [componentWillReceiveProps]');
  }
  shouldComponentUpdate () {
    log.warn('Child_2 [shouldComponentUpdate]');
    return true;
  }
  componentWillUpdate () {
    log.warn('Child_2 [componentWillUpdate]');
  }
  componentDidUpdate () {
    log.warn('Child_2 [componentDidUpdate]');
  }
  componentWillUnmount () {
    log.warn('Child_2 [componentWillUnmount]');
  }

  add () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    log.warn('Child_2 [render]');
    return (
      <fieldset>
        <legend>Component_Child_2</legend>
        <div>
          <button onClick={this.add.bind(this)}>this.state.count + 1</button><br />
        </div>
      </fieldset>
    )
  }
}

export default Component_Child_2
