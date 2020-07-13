import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddemployeeComponent } from './company/addemployee/addemployee.component';
import { EmployeeinfoComponent } from './company/employeeinfo/employeeinfo.component';

const paths: Routes = [
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"addemployee",component:AddemployeeComponent},
  {path:"employeeinfo", component:EmployeeinfoComponent},
  {path: "", redirectTo: "/employeeinfo", pathMatch: "full"}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AuthModule,CompanyModule,RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
