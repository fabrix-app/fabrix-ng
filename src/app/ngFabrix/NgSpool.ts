import { FabrixApp } from '@fabrix/fabrix'
import { Inject, Injectable, InjectionToken } from '@angular/core'

export interface NgSpoolConfiguration {
  appConfig?: {[key: string]: any}
}

export const DefaultNgSpoolConfiguration: NgSpoolConfiguration = {
  appConfig: {
    environment: {
      development: true,
      staging: false,
      testing: false,
      production: false
    }
  }
}

export const FABRIX_CONFIG = new InjectionToken<NgSpoolConfiguration>('FABRIX_CONFIG')

@Injectable()
export class NgSpool {
  // public config: NgEngineConfig
  public app: FabrixApp

  constructor(
    @Inject(FABRIX_CONFIG)
    protected _config: any
  ) {

    this.app = new FabrixApp(_config)
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
