import React from 'react'

const Hello = props => {
  const title = '書道'
  const imgUrl = 'http://uta.pw/shodou/img/28/214.PNG'
  return (
    <div>
      <h1>{title}</h1>
      <p>
        <img src={imgUrl} />
      </p>
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
