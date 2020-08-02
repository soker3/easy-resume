import resume from './resume'

let store = {
  debug: true,
  state: {
    resume: resume,
    user: null
  },
  setResumeAction (newValue) {
    if (this.debug) console.log('setResumeAction triggered with', newValue)
    this.state.resume = newValue
  },
  clearResumeAction () {
    if (this.debug) console.log('clearResumeAction triggered')
    this.state.resume = null
  },
  setUserAction (newValue) {
    if (this.debug) console.log('setUserAction triggered with', newValue)
    this.state.user = newValue
  },
  clearUserAction () {
    if (this.debug) console.log('clearUserAction triggered')
    this.state.user = null
  }
}

export default store