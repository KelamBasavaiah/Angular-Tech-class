import{Student} from '../student/student.model';
export class StudentService{
  private student:Student;
    constructor(){
        this.student= new Student(102,"Basivi",24,false)
    }
    getStudent():Student{
        return this.student;
    }
}