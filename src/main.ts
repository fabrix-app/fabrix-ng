/**
 * Main entry for Client
 */

import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/root/app.module'

import * as appConfig from './appConfig'

if (appConfig.environment.production) {
  enableProdMode()
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err))
})
