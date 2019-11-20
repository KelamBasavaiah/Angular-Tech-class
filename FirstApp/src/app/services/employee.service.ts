import{Employee} from '../employee/employee.model';
export class EmployeeService{
  private  employee:Employee;
    constructor(){
        this.employee= new Employee(101,"Basivii",23,false)
    }
    getEmployee(){
        return this.employee;
    }
}