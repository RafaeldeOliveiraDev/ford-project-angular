import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent, LoginComponent],
  
    imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    FormsModule,],
  
    exports: [HomeComponent]
})
export class HomeModule {}
