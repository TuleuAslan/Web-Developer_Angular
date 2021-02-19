import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';

import {OverlayModule} from '@angular/cdk/overlay';
import { ToastsComponent } from './pages/toasts/toasts.component';
import { AlertComponent } from './components/alert/alert.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SecondComponent } from './components/second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastsComponent,
    AlertComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    OverlayModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    FormsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
