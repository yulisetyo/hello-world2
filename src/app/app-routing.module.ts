import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { Route } from '@angular/compiler/src/core';
import { UsersComponent } from './users/users.component';
import { FormUserComponent } from './form-user/form-user.component';

const routes: Routes = [
  { path:'employee', component:EmployeesComponent },
  { path:'employee/:id', component:EmployeeComponent },
  { path:'users', component:UsersComponent},
  { path:'users/:id', component:UsersComponent},
  { path:'crud', component:FormUserComponent},
  { path:'', component:HomeComponent },
  { path:'**', component:PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
