import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  // nama: string;
  @Input('nama') nama: string;
  constructor(private employeeService:EmployeeService){
  }
  
  saveData(){
    this.employeeService.addEmployee(this.nama);
  }

  ngOnInit() {
  }
}
