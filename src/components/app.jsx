import React from 'react'

import '../styles/styles.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      numOfSets: 8,
      durationExercise: 20,
      durationRest: 10,
      durationWarmup: 0,
      durationCooldown: 0
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

        <div>
          <fieldset>
            <label htmlFor="numOfSets">Number of sets</label>

            <input type="number" name="numOfSets" id="numOfSets" value={this.state.numOfSets} onChange={this.handleChange} />
          </fieldset>

          <fieldset>
            <label htmlFor="durationExercise">Exercise</label>

            <input type="number" name="durationExercise" id="durationExercise" value={this.state.durationExercise} onChange={this.handleChange} />

            <select name="colorExercise" id="colorExercise" onChange={this.handleChange}>
              <option value="gray">Gray</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="teal">Teal</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="magenta">Magenta</option>
              <option value="deep-purple">Deep purple</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="durationRest">Rest</label>

            <input type="number" name="durationRest" id="durationRest" value={this.state.durationRest} onChange={this.handleChange} />

            <select name="colorRest" id="colorRest" onChange={this.handleChange}>
              <option value="gray">Gray</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="teal">Teal</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="magenta">Magenta</option>
              <option value="deep-purple">Deep purple</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="durationWarmup">Warmup</label>

            <input type="number" name="durationWarmup" id="durationWarmup" value={this.state.durationWarmup} onChange={this.handleChange} />

            <select name="colorWarmup" id="colorWarmup" onChange={this.handleChange}>
              <option value="gray">Gray</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="teal">Teal</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="magenta">Magenta</option>
              <option value="deep-purple">Deep purple</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="durationCooldown">Cooldown</label>

            <input type="number" name="durationCooldown" id="durationCooldown" value={this.state.durationCooldown} onChange={this.handleChange} />

            <select name="colorCooldown" id="colorCooldown" onChange={this.handleChange}>
              <option value="gray">Gray</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="teal">Teal</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="magenta">Magenta</option>
              <option value="deep-purple">Deep purple</option>
            </select>
          </fieldset>

          <fieldset>
            <button onClick={this.handleClick}>Create timer</button>
          </fieldset>
        </div>
      </div>
    )
  }
}

export default App
