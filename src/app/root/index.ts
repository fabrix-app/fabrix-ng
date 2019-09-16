import { Spool } from '@fabrix/fabrix/dist/common'
import * as CONFIG from './config'
// import { ACTIONS, EFFECTS, REDUCERS } from './store'

export class App extends Spool {
  constructor(app) {
    super(app, {
      config: CONFIG,
      pkg: {name: 'app'},
      // actions: ACTIONS,
      // effects: EFFECTS,
      // reducers: REDUCERS
    })
  }
}
