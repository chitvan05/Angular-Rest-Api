import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {IStudent} from './student';
//import {Observable} from 'rxjs/Observable'
import { Observable } from 'rxjs';
import { User } from './user';
 
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  private _url:string = "http://localhost:8080/student/";

  private posturl = "http://localhost:8080/student/";
  constructor(private http: HttpClient) { }

  getStudent(): Observable<IStudent[]>{
 
    return this.http.get<IStudent[]>(this._url);
    //return [{"id":1,"age":25,"name":"Rahul","city":"Satara","lastname":"Nalawade","email":"coollollya@gmail.com"},{"id":2,"age":21,"name":"janhavi","city":"mumbai","lastname":"gupta","email":"email.com"},{"id":3,"age":21,"name":"janhavi","city":"mumbai","lastname":"3","email":"email.com"},{"id":6,"age":21,"name":"janhavi","city":"kolkata","lastname":"6","email":"email.com"},{"id":7,"age":21,"name":"janhavi","city":"mumbai","lastname":"6","email":"email.com"}]
  }

  getStudent1(id): Observable<IStudent[]>{
 
    return this.http.get<IStudent[]>(this._url + id);
    //return [{"id":1,"age":25,"name":"Rahul","city":"Satara","lastname":"Nalawade","email":"coollollya@gmail.com"},{"id":2,"age":21,"name":"janhavi","city":"mumbai","lastname":"gupta","email":"email.com"},{"id":3,"age":21,"name":"janhavi","city":"mumbai","lastname":"3","email":"email.com"},{"id":6,"age":21,"name":"janhavi","city":"kolkata","lastname":"6","email":"email.com"},{"id":7,"age":21,"name":"janhavi","city":"mumbai","lastname":"6","email":"email.com"}]
  }
  
  deleteEmployee(id){
    return this.http.delete<IStudent[]>(this._url + id)
    
  }

  updatestudent(id,user: User){

    console.log(JSON.stringify(user))

    var obj = JSON.parse(JSON.stringify(user));

    console.log(obj)

    return this.http.put<any>(this._url + id, obj , this.httpOptions)
   
  }
  enroll(user: User){

  return this.http.post<any>(this.posturl,user)

  }


}
