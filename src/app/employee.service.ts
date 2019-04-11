import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees = [
    {id:1, name:'Adi'},
    {id:2, name:'Ade'},
    {id:3, name:'Adu'},
    {id:4, name:'Eda'},
    {id:5, name:'Edi'},
    {id:6, name:'Edo'}
  ];

  constructor() { }
  
  getAllEmployee(){
    return this.employees;
  }
  
  addEmployee(nama: string){
    let newId = this.employees.length+1;
    this.employees.push({id: newId, name: nama});
  }

}
