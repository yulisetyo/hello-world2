import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http:HttpClient) { }
  
  //menampilkan user dari HPPT GET
  getUsers(){
    return this.http
      //.get('https://jsonplaceholder.typicode.com/users');
      .get('http://localhost:3000/user');
  }

  //menampilkan user yang dipilih berdasarkan id-nya
  getById(id: number): Observable<HttpResponse<User>>{
    return this.http.get<User>(
      //'https:/jf/jsonplaceholder.typicode.com/users/'+id,
      'http://localhost:3000/user/'+id,
      {observe: 'response'}).pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  //mengirim data menggunakan HTTP POST
  sendData(data: User){
    return this.http
     .post('https//jsonplaceholder.typicode.com/users/',
        JSON.stringify(data)
      );
  }

  //penanganan error
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Error:'+error.error.message);
    } else {
      console.error(`
        API returned code ${error.status},
        body:${error.error}
      `);
    }
    return throwError('Something bad');
  }
}
