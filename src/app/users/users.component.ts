import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

interface User {
  name: string,
  id: number
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User;
  users;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
         .subscribe(
           response=>{
             this.users = response;
            //  console.log(response);
           }
         )
    // this.userService.getById(1)
    //   .subscribe(
    //     response=>{
    //       const keys = response.headers.keys();
    //       keys.map(key=>{
    //         console.log('key :'+key+' value: '+response.headers.get(key));
    //       });
    //       /*console.log(response.headers);*/
    //       this.user = response.body;
    //     }
    //   );
  }
}
