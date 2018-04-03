import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Component_Child_1 from './Component_Child_1.js'
import Component_Child_2 from './Component_Child_2.js'
import log from './util.js'

class Component_Parent extends Component {
  constructor(props) {
    super(props)

    log.info('Parent [constructor]');
    this.state = {
      count: 0,
      isSub1Show: true,
      isSub2Show: true
    }
  }
  componentWillMount () {
    log.info('Parent [componentWillMount]');
  }
  componentDidMount () {
    log.info('Parent [componentDidMount]');
  }
  componentWillReceiveProps () {
    log.info('Parent [componentWillReceiveProps]');
  }
  shouldComponentUpdate () {
    log.info('Parent [shouldComponentUpdate]');
    return true;
  }
  componentWillUpdate () {
    log.info('Parent [componentWillUpdate]');
  }
  componentDidUpdate () {
    log.info('Parent [componentDidUpdate]');
  }
  componentWillUnmount () {
    log.info('Parent [componentDidUpdate]');
  }

  add () {
    this.setState({
      count: this.state.count + 1
    })
  }
  destory () {
    ReactDOM.unmountComponentAtNode(document.querySelector('#container'));
  }
  display1 () {
    this.setState({
      isSub1Show: !this.state.isSub1Show
    })
  }
  display2 () {
    this.setState({
      isSub2Show: !this.state.isSub2Show
    })
  }

  render () {
    log.info('Parent [render]');
    return (
      <fieldset>
        <legend>Component_Parent</legend>
        <div>
          <button onClick={this.add.bind(this)}>this.state.count + 1</button><br />
          <button onClick={this.destory.bind(this)}>卸载 Parent</button><br />
          <button onClick={this.display1.bind(this)}>装载/卸载 Child_1</button><br />
          <button onClick={this.display2.bind(this)}>装载/卸载 Child_2</button><br />
        </div>

        {this.state.isSub1Show
          ? <Component_Child_1 count={this.state.count} onChange={this.add.bind(this)} />
          : null
        }

        <br />

        {this.state.isSub2Show
          ? <Component_Child_2 onChange={this.add.bind(this)} />
          : null
        }
      </fieldset>
    )
  }
}

export default Component_Parent
