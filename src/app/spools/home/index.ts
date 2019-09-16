import { Spool } from '@fabrix/fabrix/dist/common'
import * as CONFIG from './config'
import * as PKG from './package.json'

export class Home extends Spool {

  constructor(app) {
    super(app, {
      config: CONFIG,
      pkg: PKG
    })
  }

}
