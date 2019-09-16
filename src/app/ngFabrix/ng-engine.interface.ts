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
