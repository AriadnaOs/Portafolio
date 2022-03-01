import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
