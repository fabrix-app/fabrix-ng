// Angular Core
import {
  NgModule
} from '@angular/core'
// Angular Common
import {
  CommonModule
} from '@angular/common'
// Angular Router
import {
  RouterModule
} from '@angular/router'
// // NgSpool
import {
  NgSpool,
  NgFabrixService,
  // NgSpoolConfig,
  // NgSpoolConfiguration,
  FABRIX_CONFIG
} from './NgSpool.service'

import { DefaultNgSpoolConfiguration } from './ng-engine.interface'

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [],
  exports: [],
  providers: [
    NgSpool,
    NgFabrixService,
    {
      provide: FABRIX_CONFIG, useValue: DefaultNgSpoolConfiguration
    }
  ]
})
export class NgFabrixModule { }

export {
  NgSpool,
  NgFabrixService,
  // NgSpoolConfig,
  // NgSpoolConfiguration,
  FABRIX_CONFIG
}
