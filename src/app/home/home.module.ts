import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { SecureDomPipe } from '../pipes/secure-dom.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [ 
    HomeComponent, 
    SecureDomPipe 
  ],
  exports:[ HomeComponent ],
  providers: []
})
export class HomeModule { }
