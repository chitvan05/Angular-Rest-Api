import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

   let resp =  this.http.get(""); // url and data to be added
    resp.subscribe((data) => console.log(data));
  }

}
