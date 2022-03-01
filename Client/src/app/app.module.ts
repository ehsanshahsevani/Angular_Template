import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import { NewsModule } from './modules/news/news.module';
import { AppRoutingModule } from './app-routing.module';
import { NewsRoutingModule } from './modules/news/news-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/JwtInterceptor';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [

    AppComponent,
    PageNotFoundComponent,

  ],
  imports: [
    // -------- modules --------
    NewsModule,
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

    // ----- other routing -----
    NewsRoutingModule,
    // -------------------------
    AppRoutingModule,
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
