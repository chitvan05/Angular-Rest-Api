import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

   let resp =  this.http.delete(""); // url and data to be added
    resp.subscribe((data) => console.log(data));
  }
}
