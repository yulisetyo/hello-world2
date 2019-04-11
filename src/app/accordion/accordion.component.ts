import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input('judul') judul;
  isClicked:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    this.isClicked = !this.isClicked;
  }

}
