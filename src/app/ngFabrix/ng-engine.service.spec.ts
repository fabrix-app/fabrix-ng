import { TestBed, inject } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

// NGRX
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
// NgEngine
import { NgEngineModule, NgFabrixService, FABRIX_CONFIG } from './'
// Environment Stub from  angular cli
import { environment } from '../../appConfig/environment'
// App Config for NgEngine
import * as appConfig from '../../appConfig'

describe('NgFabrixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        NgEngineModule
      ],
      providers: [
        {
          provide: FABRIX_CONFIG,
          useValue: {
            environment: environment,
            appConfig: appConfig
          }
        }
      ]
    })
  })

  it('should be created', inject([NgFabrixService], (service: NgFabrixService) => {
    expect(service).toBeTruthy()
  }))
  it('should get engine', inject([NgFabrixService], (service: NgFabrixService) => {
    expect(service.engine).toBeTruthy()
  }))
  it('should get config from engine', inject([NgFabrixService], (service: NgFabrixService) => {
    expect(service.config.get('app.title')).toBeTruthy()
  }))
  // it('should get store', inject([NgFabrixService], (service: NgFabrixService) => {
  //   expect(service.store).toBeTruthy()
  // }))
  // it('should select from store', inject([NgFabrixService], (service: NgFabrixService) => {
  //   expect(service.select('getAppState')).toBeTruthy()
  // }))
  // it('should dispatch from store', inject([NgFabrixService], (service: NgFabrixService) => {
  //   expect(service.select('getAppState')).toBeTruthy()
  // }))
})
