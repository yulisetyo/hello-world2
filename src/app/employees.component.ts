import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { inspectNativeElement } from '@angular/platform-browser/src/dom/debug/ng_probe';
import { EmployeeService } from './employee.service';

@Component(
    {
        selector:'employees',
        template:`
            <h2>Title : {{ judul }}</h2>
            <!--
            <button (click) = "handleClick($event)">
            {{btnText}}</button>
            <h2>List of Page {{ page }}</h2>
            
            <img src="{{angularLogo}}">
            <img (click) = "changeLogo($event)" [src]="logo">
            <img bind-src="angularLogo">
            -->
            <app-add-employee nama="{{editName}}"></app-add-employee>
            <ul>
                <li *ngFor="let employee of employees">
                    <a [routerLink] = "['/employee', employee.id]">
                        {{employee.name}} 
                    </a>
                    &nbsp;
                    <button (click)="editData(employee.name)">edit</button>
                   <p *ngIf="employee.name=='Adx'">ini employee spesial</p>
                </li>
            </ul>
            `
    }
)
export class EmployeesComponent implements OnInit{
    employees;
    editName: string;
    editData(name: string){
        this.editName = name;
    }

    constructor(private employeeService:EmployeeService){
    }
    
    ngOnInit(){
        this.employees = this.employeeService.getAllEmployee();
    }

    @Input() judul:string;
    @Output() change = new EventEmitter();

    page = 'Employee';
    angularLogo = "https://angular.io/assets/images/logos/angular/angular.png";
    btnText = 'Click me...';
    logo = "https://angular.io/assets/images/logos/angular/angular.png";
    isClicked = false;

    handleClick(e){
        this.btnText = 'Thank you';
        console.log(e);
    }

    changeLogo(){
        this.change.emit('Hello there!');
        this.logo = (this.isClicked)?
        "https://angular.io/assets/images/logos/angular/angular.png":
        "https://angular.io/assets/images/logos/angular/angular_solidBlack.png";
        this.isClicked = !this.isClicked;
    }
}
