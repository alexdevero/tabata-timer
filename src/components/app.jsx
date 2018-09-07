import React from 'react'

import ScreenSettings from './screenSettings'

import '../styles/styles.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      numOfSets: 8,
      durationExercise: 20,
      durationRest: 10,
      durationWarmup: 0,
      durationCooldown: 0,
      isReady: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('clicked')
  }

  handleChange(e) {
    let elId = e.target.id
    let value = parseInt(e.target.value)

    this.setState({
      [elId]: value
    })
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>Tabata timer</h1>

        {!this.state.isReady && <ScreenSettings state={this.state} handleChange={this.handleChange} handleClick={this.handleClick} />}
      </div>
    )
  }
}

export default App
