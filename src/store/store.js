import resume from './resume'

let store = {
  debug: true,
  state: {
    resume: resume,
    defaultResume: JSON.parse(JSON.stringify(resume))
  },
  setResumeAction (newValue) {
    if (this.debug) console.log('setResumeAction triggered with', newValue)
    this.state.resume = newValue
  },
  clearResumeAction () {
    if (this.debug) console.log('clearResumeAction triggered')
    this.state.resume = null
  }
}

export default store