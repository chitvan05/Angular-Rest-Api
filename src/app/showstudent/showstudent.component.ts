import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.component.html',
  styleUrls: ['./showstudent.component.css']
})
export class ShowstudentComponent implements OnInit {

  public students = [];
  constructor(private _studentservice: StudentService) { }

  ngOnInit(): void {
  this._studentservice.getStudent()
  .subscribe(data => this.students = data)

  }

  onSelect(selectedItem: any) {
    this._studentservice.getStudent1(selectedItem.id)
    .subscribe(data => this.students = data)
    console.log(this.students);
     // You get the Id of the selected item here
}

onDelete(selectedItem: any) {
  this._studentservice.deleteEmployee(selectedItem.id)
  .subscribe(data => this.students = data)
  location.reload();
  console.log(this.students);
   // You get the Id of the selected item here
}
  
}
