import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routers
import { AppRoutingModule } from './app.routing';

// Modules
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

// Components
import { AppComponent } from './app.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotPageFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
