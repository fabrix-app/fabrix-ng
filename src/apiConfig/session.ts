'use strict'

export const session = {
  /**
   * Secret use by express for his session
   */
  secret: 'ng-fabrix',

  /**
   * Store use by express for saving his session
   */
  store: null,

  /**
   * Extras options pass to express session middleware
   */
  options: {}
}
