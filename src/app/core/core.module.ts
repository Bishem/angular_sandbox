import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';

import { NavigationComponent } from './components';
import { CoreRoutingModule } from './core-routing.module';
import { ApiPrefixInterceptor } from './interceptors';

/**
 * core routing here represents the root navigation paths of the application.
 * it provides a router outlet used in the root component
 * to display the views of each features
 *
 * @see [AppComponent](../app.component.html) for more information on outlet implementation
 * @see [CoreRoutingModule](core-routing.module.ts) for all used features as routes
 */
@NgModule({
  imports: [CoreRoutingModule, HttpClientModule],
  exports: [CoreRoutingModule, NavigationComponent],
  declarations: [NavigationComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
