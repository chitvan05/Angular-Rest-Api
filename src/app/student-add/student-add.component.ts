import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

userModel = new User("","","","","")


  constructor(private _studentservice: StudentService) { }
  onSubmit(){
console.log(this.userModel)
    this._studentservice.enroll(this.userModel)
    .subscribe(
      data => console.log('Success',data),
      error=> console.error('Error',error)

    )
    document.location.href = '/showstudents';
  }
  ngOnInit(): void {

  }


  
}
