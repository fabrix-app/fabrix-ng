# NgSpool

[![Build status][ci-image]][ci-url]

## Fabrix and NgSpool
NgSpool helps you boot Fabrix in an Angular Application so that you can build isomorphic applications!

## Configuration
### .angular-cli.json
You will need to update the cli to use the NgSpool config by modifying your `.angular-cli.json` file.
```
...
"environmentSource": "appConfig/environment.ts",
"environments": {
  "dev": "appConfig/environment.ts",
  "staging": "appConfig/env/staging/index.ts",
  "testing": "appConfig/env/testing/index.ts",
  "prod": "appConfig/env/production/index.ts"
}
...
```

Next you will need import the module and add a new provider.
NgSpool exposes an injection token that can be used to provide configuration.

```ts
//app.module.ts
...
providers: [
  {
    provide: ENGINE_CONFIG,
    useValue: {
      appConfig: appConfig
    }
  }
],
...
```

## Anatomy of an NgSpool
- index.ts
- package.json
- *.router.ts
- *.module.ts
- *.module.spec.ts
- config
  - index.ts
  - *.ts

## appConfig
You can do this almost exactly as you would with Fabrix, but here's an example:

Angular configuration can be very strange at times and this leads to many developers just hard coding variables when they should be configurable. NgSpool solves this by providing an environment driven approach to configuration and uses the Map functionality of ES6 and the Tuple Space by using Fabrix in the browser!

### index.ts
The index barrel exports the configuration

### main.ts
Main exports the spools.

### environment.ts 
```js
export const environment = {
  development: true,
  staging: false,
  testing: false,
  production: false,
  APP_BASE_HREF: 'http://localhost:3000'
}
```

### env
Exports the environment specific configuration.

Structure:
 - testing
   - index.ts
 - staging
   - index.ts
 - production
   - index.ts
   
The index barrel of the any env must specify the environments and whether they are true or false just like the environment.ts file. In addition, you can specify spool overrides!

```js
// staging/index.ts
import { app } from './app'
export const environment = {
  development: false,
  staging: true,
  testing: false,
  production: false,
  app: app
}
``` 
  
# Example
Let's say you have an app component, and you want to set some environment specific values, and that you also want to be able to share those values between different components, even if they are lazy loaded. Normally you would need to create some sort of service, do a bunch of injection and pray that you did it right.

With NgSpool, you set up your configuration for your component and then you can access it any other component through NgSpoolService.

```ts
ngService.config.get('app.title')
```

Through NgService you have access to the config method.  Using dot syntax, you can ask the service for a value that may or may not exists with ease and confidence. So instead of something like:
```ts
// NOT SO GOOD
if (app && app.metadata && app.metadata.page1 && app.metadata.page1.title)
```

You can just query the config map:
```ts
// GOOD
if (ngService.config.get('app.metadata.page1.title'))
``` 

In addition, you can set default configs in your spools and then override them through `appConfig/<spool-name>.ts` and additionally set overrides those based on your environment through `appConifg/env/<environment>/<spool-name>.ts`, just like you would on a Fabrix app!

# Configuring your Application

## Fabrix
For Fabrix documentation see the [Fabrix Website](https://fabrixjs.io).  The only difference is that we are extending fabrix with Typescript and bundling it with webspool. You can configure Fabrix through `src/apiConfig`.

## Angular
For Angular documentation see the [Angular Website](https://angular.io).  You can configure your NgSpool Angular app through `src/appConfig`.

# Development

## Fabrix server
run `npm run build && node dist/server.js` for the fabrix server to start. Navigate to `http://localhost:3000/`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm start` for a dev server that expects the API server at `http://localhost:3000`.  

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Quick Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Alternatively run `npm run build`. The build artifacts will be stored in the `dist/` directory.

## Production Build
Run `npm run serve:prod:ngsw` for a production build with Service Workers and PWA. To just build the service worker build, run `npm run build:prod:ngsw` and then start it with `node dist/server`

Run `npm run build:prod` for a production build. The build artifacts will be stored in the `dist/` directory. To start the server run `node dist/server`.

## Running CI tests
Run `npm test` to execute the unit test, end to end tests, and mocha spec test for node.js.

## Running unit tests
Run `ng test` or `npm run test:ng` to execute the unit tests via [Karma](https://karma-runner.github.io). To continuously run unit tests, run `npm run test:ng:watch`

## Running end-to-end tests
Run `ng e2e` or `npm run test:e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploying to Heroku
First you will need to create a Heroku app. The package.json includes a "heroku-postbuild" script that will build the app. The Procfile includes the location to start the node server which will serve the app on Heroku.

## Known Issues
The Fabrix REPL (spool-repl) includes some characters that production webspool builds (`webspool -p`) can not parse and fails during the uglify process.  Currently, we use the normal webpack build which is faster but has a larger slug. If you can fix this, we would love a PR!

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-ng/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-ng/tree/master
