import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store, select } from '@ngrx/store'

import { NgFabrixService } from '../../ngFabrix'

import * as home from './store/actions/home'
import * as fromHome from './store/reducers'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public appTitle
  public homeState$: Observable<any>
  public all

  constructor(
    private _ngFabrix: NgFabrixService,
    private _store: Store<any>
  ) {
    this.appTitle = this._ngFabrix.config.get('app.title')
    const title = this._ngFabrix.config.get('home.title')
    this._store.dispatch(new home.HelloWorldAction(title))
    this._store.dispatch(new home.fabrixAction(null))
    this.homeState$ = this._store.pipe(select(fromHome.getHomeState))

    // this.all = this._ngFabrix.config.dehydrate()
  }

  ngOnInit() {}
}
