import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { ServicesComponent } from './services.component';
import { ServiceListComponent } from './service-list/service-list.component';


const serviceRoutes: Routes = [
  { path: "", component: ServicesComponent }
]

@NgModule({
  declarations: [
    ServicesComponent,
    ServiceListComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(serviceRoutes),
    CommonModule
  ],
})
export class ServiceModule { }
