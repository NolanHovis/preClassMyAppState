import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalsComponent } from './modals/modals.component';
import { ModalsModule } from './modals/modals.module';
import { ProgrommaticModalComponent } from './progrommatic-modal/progrommatic-modal.component';
import { PlaceholderDirective } from './shared/directives/placeholder.directive';
import { LoginEmailComponent } from './auth/login-email/login-email.component';
import { SignupEmailComponent } from './auth/signup-email/signup-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { JustCurrentuserValueComponent } from './just-currentuser-value/just-currentuser-value.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateComponent } from './animate/animate.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ProgrommaticModalComponent,
    PlaceholderDirective,
    JustCurrentuserValueComponent,
    AnimateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ModalsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AuthModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
