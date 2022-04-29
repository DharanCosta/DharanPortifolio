import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './menu/menu.component';
import { LandpageComponent } from './landpage/landpage.component';
import { FooterComponent } from './footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { TechComponent } from './tech/tech.component';
import { ProjectsportiComponent } from './projectsporti/projectsporti.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandpageComponent,
    FooterComponent,
    AboutmeComponent,
    ContactComponent,
    TechComponent,
    ProjectsportiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
