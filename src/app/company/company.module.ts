import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';


@NgModule({
  declarations: [AddemployeeComponent, EmployeeinfoComponent],
  imports: [
    CommonModule,RouterModule,FormsModule,HttpClientModule,ReactiveFormsModule,ChartsModule
  ]
})
export class CompanyModule { }
