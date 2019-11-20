import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
favClass;
student:Student;
studentLikeCount:number;

  constructor(private studentservices:StudentService) {

this.student=studentservices.getStudent();
this.changeState();
this.studentLikeCount=0;


   }

   likeStudent(){
     this.studentLikeCount+=1;
     this.favClass="glyphicon glyphicon-heart";
     
   }

   changeState()
   {
    if(this.student.favStatus)
     this.favClass="glyphicon glyphicon-heart";
    else
     this.favClass="glyphicon glyphicon-heart-empty";
   }

  ngOnInit() {
  }

}
