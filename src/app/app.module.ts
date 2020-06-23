import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreInterceptor } from '../core/interceptor/mock.core.interceptor';

@NgModule( {
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  providers: [
    {
      multi: true,
      useClass: CoreInterceptor,
      provide: HTTP_INTERCEPTORS,
    },
  ],
  imports: [
    NavBarModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ] ),
  ],
} )
export class AppModule
{
}
