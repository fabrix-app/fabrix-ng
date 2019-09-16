import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { StoreModule, combineReducers, Store } from '@ngrx/store'

// NgEngine Module
import { NgEngineModule, NgFabrixService,
  FABRIX_CONFIG
} from '../../ngFabrix'
// App Config for NgEngine
import * as appConfig from '../../../appConfig'

// Home Component
import { HomeComponent } from './home.component'

import * as home from './store/actions/home'
import * as fromHome from './store/reducers'

describe('HomeComponent', () => {
  let store: Store<fromHome.State>
  let component: HomeComponent
  let ngFabrixService: NgFabrixService
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(fromHome.reducers),
        NgEngineModule
        // other imports
      ],
      declarations: [ HomeComponent ],
      providers: [
        {
          provide: FABRIX_CONFIG,
          useValue: {
            appConfig: appConfig
          }
        }
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    store = TestBed.get(Store)
    spyOn(store, 'dispatch').and.callThrough()
    ngFabrixService = TestBed.get(NgFabrixService)
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })

  // it('should subscribe to published app state', async(() => {
  //   ngFabrixService.dispatch('SetTitleAction', {title: 'Proxy Engine with Angular'})
  //   component.appState$.subscribe(data => {
  //     expect(data.title).toBe('Proxy Engine with Angular')
  //   })
  // }))
  //
  // it('should set h1 as appState$.title', async(() => {
  //   ngFabrixService.dispatch('SetTitleAction', {title: 'Proxy Engine with Angular'})
  //   component.appState$.subscribe(data => {
  //     fixture.whenStable().then(() => {
  //       fixture.detectChanges()
  //       const compiled = fixture.debugElement.nativeElement
  //       expect(compiled.querySelector('h1').textContent).toContain('Proxy Engine with Angular')
  //     })
  //   })
  // }))

  it('should set h1 as appState$.title', async(() => {
    const title = ngFabrixService.config.get('app.title')
    fixture.whenStable().then(() => {
      fixture.detectChanges()
      const compiled = fixture.debugElement.nativeElement
      expect(compiled.querySelector('h1').textContent).toContain(title)
    })
  }))

  it('should set h2 as homeState$.title', async(() => {
    // const title = ngFabrixService.config.get('home.title')
    // const action = new home.HelloWorldAction(title)
    // store.dispatch(action)
    // expect(store.dispatch).toHaveBeenCalledWith(action)

    component.homeState$.subscribe(data => {
      fixture.whenStable().then(() => {
        fixture.detectChanges()
        const compiled = fixture.debugElement.nativeElement
        expect(compiled.querySelector('h2').textContent).toContain(data.title)
      })
    })
  }))
})
