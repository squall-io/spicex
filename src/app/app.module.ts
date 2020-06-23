import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]),
  ],
})
export class AppModule { }
