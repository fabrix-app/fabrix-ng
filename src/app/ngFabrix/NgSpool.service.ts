import { Injectable, Inject, forwardRef } from '@angular/core'
// import { Store } from '@ngrx/store'
import { NgSpool, NgSpoolConfiguration, FABRIX_CONFIG } from './NgSpool'
import { FabrixApp } from '@fabrix/fabrix'

@Injectable()
export class NgFabrixService {
  constructor(
    @Inject(forwardRef(() => NgSpool)) protected ngSpool: NgSpool,
    // protected _store: Store<any>
) {
    // Log the configuration
    this.log(this.ngSpool)

    // Dispatch to the Store that packs have been loaded
    // for (const p in this.NgSpool.packs) {
    //   if (!this.NgSpool.packs.hasOwnProperty(p)) {
    //     continue
    //   }
    //   // Dispatch loaded pack and it's config
    //   const pack = this.NgSpool.packs[p]
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
    return this.ngSpool.app
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
  NgSpool,
  NgSpoolConfiguration,
  FABRIX_CONFIG
}
