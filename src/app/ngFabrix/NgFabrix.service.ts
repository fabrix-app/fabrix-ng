import { Injectable, Inject, forwardRef } from '@angular/core'
// import { Store } from '@ngrx/store'
import { NgFabrix, NgFabrixConfiguration, FABRIX_CONFIG } from './NgFabrix'
import { FabrixApp } from '@fabrix/fabrix'

@Injectable()
export class NgFabrixService {
  constructor(
    @Inject(forwardRef(() => NgFabrix)) protected ngFabrix: NgFabrix,
    // protected _store: Store<any>
) {
    // Log the configuration
    this.log(this.ngFabrix)

    // Dispatch to the Store that packs have been loaded
    // for (const p in this.NgFabrix.packs) {
    //   if (!this.NgFabrix.packs.hasOwnProperty(p)) {
    //     continue
    //   }
    //   // Dispatch loaded pack and it's config
    //   const pack = this.NgFabrix.packs[p]
    //   this.dispatch('app', 'LoadPackAction', {
    //     pack: {
    //       id: pack.id,
    //       name: pack.name,
    //       config: pack.config
    //     }
    //   })
    // }
    // // Dispatch that packs have finished loading
    // this.dispatch('app', 'LoadPacksCompleteAction', true)
  }

  /**
   * Get Alias of engine
   */
  get app(): FabrixApp {
    return this.ngFabrix.app
  }

  /**
   * Get Engine Config
   */
  get config() {
    return this.app.config
  }

  /**
   * Get Engine Environment
   */
  get environment(): any | string {
    return this.app.environment
  }
  /**
   * Log Items to engine log
   */
  get log(): any {
    return this.app.log
  }
}

// Export Engine, Store, Config, and the Configuration interface
export {
  NgFabrix,
  NgFabrixConfiguration,
  FABRIX_CONFIG
}
