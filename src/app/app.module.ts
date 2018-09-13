import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';




import { MoviesComponent } from './components/movies/movies.component';
import { MoviesPublicComponent } from './components/movies/movies-public/movies-public.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesPublicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'movies', component: MoviesComponent},
      {path: 'movies-public', component: MoviesPublicComponent},
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
