import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  name: string;
  email: string;
  errorMsg = {name: ''};
  user: User;

  constructor(private userService:UserService) { }

  //mengirim data menggunakan HTTP POST
  submitData(){
    let isValid = this.validate();
    if(isValid){
      //panggil service untuk POST data
      this.user.name = this.name;
      this.userService.sendData(this.user);
    }
  }

  //validasi input data
  validate(){
    if(!this.name){
      this.errorMsg.name="Name required!";
      return false;
    } else {
      return true;
    }
  }

  ngOnInit() {
  }

}
