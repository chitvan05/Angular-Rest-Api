import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

   let resp =  this.http.get("https://api.covid19api.com/"); //url used for testing purpose
    resp.subscribe((data) => console.log(data));
  }

}
