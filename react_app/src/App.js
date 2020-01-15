import React from 'react'

const Hello = props => {
  const css1 = {
    color: 'red',
    'background-color': '#f0f0ff',
    'font-size': '2em'
  }
  const css2 = {
    color: 'blue',
    backgroundColor: '#fff0f0',
    fontSize: '2em'
  }
  return (
    <div>
      <p style={css1}>探すのに時あり</p>
      <p style={css2}>捨てるのに時がある</p>
    </div>
  )
}
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

export default App
