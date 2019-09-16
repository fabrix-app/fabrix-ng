// import { NgPack } from '../../ngFabrix'
import { Spool } from '@fabrix/fabrix/dist/common'
import * as CONFIG from './config'
import * as PKG from './package.json'
import { ACTIONS, EFFECTS, REDUCERS } from './store'

export class Home extends Spool {
  constructor(app) {
    super(app, {
      config: CONFIG,
      pkg: PKG,
      // actions: ACTIONS,
      // effects: EFFECTS,
      // reducers: REDUCERS
    })
  }
}
