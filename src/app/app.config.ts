import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { initialUserState, initialStateReducer } from './modules/reducers/login.reducer';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
// import { CustomRouterStateSerializer } from '@store/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ messages: initialStateReducer, router: routerReducer }),
    // provideRouterStore({ serializer: CustomRouterStateSerializer }),
    // provideState({name:'abc',reducer:initialStateReducer})
  ]
};
