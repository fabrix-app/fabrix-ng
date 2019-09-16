import { Home } from '../app/spools/home'
import { FourZeroFour } from '../app/spools/404'
import { FiveZeroZero } from '../app/spools/500'

/**
 * Exports the NgPacks that will be loaded and merged into config
 * Order Matters
 */
export const main = {
  target: 'browser',
  spools: [
    // Home,
    // FourZeroFour,
    // FiveZeroZero
  ]
}
