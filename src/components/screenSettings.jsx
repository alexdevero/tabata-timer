import React from 'react'

const ScreenSettings = ( props ) => {
  return(
    <div className="screen-settings">
      <fieldset>
        <label htmlFor="numOfSets">Number of sets</label>

        <input type="number" name="numOfSets" id="numOfSets" value={props.state.numOfSets} onChange={props.handleChange} />
      </fieldset>

      <fieldset>
        <label htmlFor="durationExercise">Exercise</label>

        <input type="number" name="durationExercise" id="durationExercise" value={props.state.durationExercise} onChange={props.handleChange} />

        <select name="colorExercise" id="colorExercise" onChange={props.handleChange}>
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

        <input type="number" name="durationRest" id="durationRest" value={props.state.durationRest} onChange={props.handleChange} />

        <select name="colorRest" id="colorRest" onChange={props.handleChange}>
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

        <input type="number" name="durationWarmup" id="durationWarmup" value={props.state.durationWarmup} onChange={props.handleChange} />

        <select name="colorWarmup" id="colorWarmup" onChange={props.handleChange}>
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

        <input type="number" name="durationCooldown" id="durationCooldown" value={props.state.durationCooldown} onChange={props.handleChange} />

        <select name="colorCooldown" id="colorCooldown" onChange={props.handleChange}>
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
        <button onClick={props.handleClick}>Create timer</button>
      </fieldset>
    </div>
  )
}

export default ScreenSettings
