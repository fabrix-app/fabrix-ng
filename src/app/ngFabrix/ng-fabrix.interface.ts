export interface NgFabrixConfiguration {
  config?: {[key: string]: any}
}

export const DefaultNgFabrixConfiguration: NgFabrixConfiguration = {
  config: {
    environment: {
      development: true,
      staging: false,
      testing: false,
      production: false
    }
  }
}
