import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { PublicNavbarComponent } from './layout/public-navbar/public-navbar.component';
import { PrivateNavbarComponent } from './layout/private-navbar/private-navbar.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { AboutComponent } from './public/about/about.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { GaleriaComponent } from './private/galeria/galeria.component';
import { CrudComponent } from './private/crud/crud.component';
import { ProfileComponent } from './private/profile/profile.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RotateDirective } from './directives/rotate.directive';

@NgModule({
  declarations: [
    AppComponent,
    PublicNavbarComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    PrivateNavbarComponent,
    DashboardComponent,
    GaleriaComponent,
    CrudComponent,
    ProfileComponent,
    FooterComponent,
    RotateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
