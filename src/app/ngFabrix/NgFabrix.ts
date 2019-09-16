import { FabrixApp } from '@fabrix/fabrix'
import { Inject, Injectable, InjectionToken } from '@angular/core'

export interface NgFabrixConfiguration {
  config?: {[key: string]: any}
  api?: {[key: string]: any}
  pkg?: {[key: string]: any}
}

export const DefaultNgFabrixConfiguration: NgFabrixConfiguration = {
  config: {
    main: {
      target: 'browser',
      spools: []
    },
    environment: {
      development: true,
      staging: false,
      testing: false,
      production: false
    }
  },
  api: {},
  pkg: {
    name: 'unnamed-fabrix-app'
  }
}

export const FABRIX_CONFIG = new InjectionToken<NgFabrixConfiguration>('FABRIX_CONFIG')

@Injectable()
export class NgFabrix {
  // public config: NgEngineConfig
  public app: FabrixApp

  constructor(
    @Inject(FABRIX_CONFIG) protected _app: any
  ) {
    this.app = new FabrixApp(_app)
    this.start()
  }

  start() {
    return this.app.start()
      .catch(err => this.stop)
  }

  stop() {
    return this.app.stop()
  }
}
