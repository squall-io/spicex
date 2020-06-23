import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarModule } from './nav-bar/nav-bar.module';

@NgModule({
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
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
})
export class AppModule {}
