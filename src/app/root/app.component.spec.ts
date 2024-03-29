import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { Router } from '@angular/router'
import { Location } from '@angular/common'

// NGRX
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
// Ng Engine
import { NgEngineModule, NgFabrixService,
  FABRIX_CONFIG
} from '../ngFabrix'
// Environment shim from CLI
import { environment } from '../../appConfig/environment'
// App Config for NgEngine
import * as appConfig from '../../appConfig'

// Shared Module
import { SharedModule } from '../shared/shared.module'
// For Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Component to Test
import { AppComponent } from './app.component'


describe('AppComponent', () => {
  let component: AppComponent
  let location: Location
  let router: Router
  let fixture: ComponentFixture<AppComponent>
  let ngFabrixService: NgFabrixService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        NgEngineModule,
        SharedModule,
        BrowserAnimationsModule
      ],
      declarations: [ AppComponent ],
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
      .compileComponents()
  }))

  beforeEach(() => {
    router = TestBed.get(Router)
    ngFabrixService = TestBed.get(NgFabrixService)
    location = TestBed.get(Location)
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
