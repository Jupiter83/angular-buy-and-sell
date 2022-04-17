import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleItemComponent } from './components/vehicle-item/vehicle-item.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { QueryComponent } from './components/query/query.component';
import { ButtonComponent } from './components/button/button.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleItemComponent,
    VehicleComponent,
    QueryComponent,
    ButtonComponent,
    VehicleDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }