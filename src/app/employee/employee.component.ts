import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // tanda "+" untuk mengubah string menjadi number
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
