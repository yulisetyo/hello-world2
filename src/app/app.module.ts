import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormatInputDirective } from './format-input.directive';
import { AccordionComponent } from './accordion/accordion.component';
import { SummaryPipe } from './summary.pipe';
import { CustomcasePipe } from './customcase.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormUserComponent } from './form-user/form-user.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    FormatInputDirective,
    AccordionComponent,
    SummaryPipe,
    CustomcasePipe,
    HomeComponent,
    PageNotFoundComponent,
    AddEmployeeComponent,
    UsersComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
