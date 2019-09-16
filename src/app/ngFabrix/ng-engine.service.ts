// import { Injectable, Inject, forwardRef } from '@angular/core'
// // import { Store } from '@ngrx/store'
// import { NgSpool, NgSpoolConfig, NgSpoolConfiguration, FABRIX_CONFIG } from './ng-engine'
//
// @Injectable()
// export class NgFabrixService {
//   constructor(
//     @Inject(forwardRef(() => NgSpool)) protected NgSpool: NgSpool,
//     // protected _store: Store<any>
// ) {
//     // Log the configuration
//     this.log(this.NgSpool)
//
//     // Dispatch to the Store that packs have been loaded
//     // for (const p in this.NgSpool.packs) {
//     //   if (!this.NgSpool.packs.hasOwnProperty(p)) {
//     //     continue
//     //   }
//     //   // Dispatch loaded pack and it's config
//     //   const pack = this.NgSpool.packs[p]
//     //   this.dispatch('app', 'LoadPackAction', {
//     //     pack: {
//     //       id: pack.id,
//     //       name: pack.name,
//     //       config: pack.config
//     //     }
//     //   })
//     // }
//     // // Dispatch that packs have finished loading
//     // this.dispatch('app', 'LoadPacksCompleteAction', true)
//   }
//
//   /**
//    * Get Alias of engine
//    */
//   get app(): NgSpool {
//     return this.NgSpool
//   }
//
//   /**
//    * Get Engine Config
//    */
//   get config(): NgSpoolConfig {
//     return this.app.config
//   }
//
//   /**
//    * Get Engine Enviroment
//    */
//   get environment(): any | string {
//     return this.app.environment
//   }
//
//   /**
//    * Get Engine state
//    */
//   get state(): any {
//     return this.NgSpool.state
//   }
//
//   // /**
//   //  * Get Engine NGRX Store
//   //  * @returns {Store<State>}
//   //  */
//   // get store(): any {
//   //   return this._store
//   // }
//
//   /**
//    * Log Items to engine log
//    */
//   public log(message: any, ...optionalParams: any[]): any {
//     return this.app.log(arguments)
//   }
// }
//
// // Export Engine, Store, Config, and the Configuration interface
// export {
//   NgSpool,
//   NgSpoolConfig,
//   NgSpoolConfiguration,
//   FABRIX_CONFIG
// }
