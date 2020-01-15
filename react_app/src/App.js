import React, { Component } from 'react'
class App extends Component {
  construdtor (props) {
    console.log('constructor')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  render () {
    console.log('render')
    const setStateHandler = e => {
      console.log('* call setState()')
      this.setState({ r: Math.random() })
    }

    return (
      <div>
        <button onClick={setStateHandler}>setState</button>
      </div>
    )
  }
}

export default App
