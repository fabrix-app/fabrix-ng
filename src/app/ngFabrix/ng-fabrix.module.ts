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
// // NgFabrix
import {
  NgFabrix,
  NgFabrixService,
  // NgFabrixConfig,
  // NgFabrixConfiguration,
  FABRIX_CONFIG
} from './NgFabrix.service'

import { DefaultNgFabrixConfiguration } from './ng-fabrix.interface'

@NgModule({
  imports: [
    // RouterModule,
    CommonModule
  ],
  declarations: [],
  exports: [],
  providers: [
    NgFabrix,
    NgFabrixService,
    {
      provide: FABRIX_CONFIG, useValue: DefaultNgFabrixConfiguration
    }
  ]
})
export class NgFabrixModule { }

export {
  NgFabrix,
  NgFabrixService,
  // NgFabrixConfig,
  // NgFabrixConfiguration,
  FABRIX_CONFIG
}
