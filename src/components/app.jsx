import React from 'react'

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
  }

  render() {
    return (
      <React.Fragment>
        <h1>Tabata timer</h1>

        <div>
          <fieldset>
            <label htmlFor="numOfSets">Number of sets</label>

            <input type="number" name="numOfSets" id="numOfSets" defaultValue={this.state.numOfSets} />
          </fieldset>

          <fieldset>
            <label htmlFor="exercise">Exercise</label>

            <input type="number" name="exercise" id="exercise" defaultValue={this.state.durationExercise} />

            <select name="colorExercise" id="colorExercise">
              <option value="gray">Gray</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="teal">Teal</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="magenta">Magenta</option>
              <option value=""></option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="rest">Rest</label>

            <input type="number" name="rest" id="rest" defaultValue={this.state.durationRest} />

            <select name="colorRest" id="colorRest">
              <option value="gray">Gray</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="teal">Teal</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="magenta">Magenta</option>
              <option value=""></option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="warmup">Warmup</label>

            <input type="number" name="warmup" id="warmup" defaultValue={this.state.durationWarmup} />

            <select name="colorWarmup" id="colorWarmup">
              <option value="gray">Gray</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="teal">Teal</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="magenta">Magenta</option>
              <option value=""></option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="cooldown">Cooldown</label>

            <input type="number" name="cooldown" id="cooldown" defaultValue={this.state.durationCooldown} />

            <select name="colorCooldown" id="colorCooldown">
              <option value="gray">Gray</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="teal">Teal</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="magenta">Magenta</option>
              <option value=""></option>
            </select>
          </fieldset>
        </div>
      </React.Fragment>
    )
  }
}

export default App
