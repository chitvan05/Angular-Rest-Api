import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

   let resp =  this.http.get(""); // url and data to be added
    resp.subscribe((data) => console.log(data));
  }

}
