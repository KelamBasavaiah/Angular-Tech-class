import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  favClass:string;
 
  employee:Employee;
  constructor( private employeeService:EmployeeService) 
  { 
  this.employee=employeeService.getEmployee();
  this.changeState();
  }

  changeState()
  {
   if(this.employee.favStatus)
    this.favClass="glyphicon glyphicon-heart";
   else
    this.favClass="glyphicon glyphicon-heart-empty";
  }
 
number:Int16Array;
  ngOnInit() {
  }

}
