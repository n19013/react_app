import React from 'react'

const Hello = props => {
  const value = '<<< 豚に真珠、、猫に小判 >>>'
  return <h2>{value}</h2>
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
