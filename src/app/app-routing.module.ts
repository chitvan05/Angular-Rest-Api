import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';


const routes: Routes = [
{path: 'showstudents', component: StudentListComponent },
{path: 'addstudents', component: StudentAddComponent},
{path:'showstudents/:id', component: StudentUpdateComponent},
{path:'deletestudents', component: StudentDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
