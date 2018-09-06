import React from 'react'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Tabata timer</h1>

        <div>
          <fieldset>
            <label htmlFor="numOfSets">Number of sets</label>

            <input type="number" name="numOfSets" id="numOfSets" defaultValue="8" />
          </fieldset>

          <fieldset>
            <label htmlFor="exercise">Exercise</label>

            <input type="number" name="exercise" id="exercise" defaultValue="20" />

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

            <input type="number" name="rest" id="rest" defaultValue="10" />

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

            <input type="number" name="warmup" id="warmup" defaultValue="0" />

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

            <input type="number" name="cooldown" id="cooldown" defaultValue="0" />

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
