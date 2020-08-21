import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { StudentService } from '../student.service';
import { ActivatedRoute,Router } from "@angular/router";


@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  public students = [];
  userModel = new User("","","","","")
  
  constructor(private _studentservice: StudentService,private router: ActivatedRoute , public routers: Router) { }
   onSubmit(){
    var id = this.router.snapshot.params.id
   console.log(this.userModel);

    this._studentservice.updatestudent(id, this.userModel).subscribe( 
       data => console.log('Success',data),
    error=> console.error('Error',error),
    )
    document.location.href = '/showstudents';
   // this.routers.navigate(['/showstudents'])
   
    
   }

  ngOnInit(): void {
 
   var id = this.router.snapshot.params.id
   this._studentservice.getStudent1(id)
  .subscribe(data =>  this.userModel = new User(data['name'],data['lastname'],data['email'],data['city'],data['age']))

  
  }

}
