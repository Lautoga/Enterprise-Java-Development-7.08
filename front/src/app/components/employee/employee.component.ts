import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: Employee[];
  selectedEmployee!:number;

  constructor(private employeeService: EmployeeService) { 
    this.employeeList= [];
    this.employeeService.getEmployees().subscribe((employees : Employee[]) => {this.employeeList = employees;});
  }

  ngOnInit(): void {
  }

  deleteEmployee(index: number): void {
    const employeeId: number= this.employeeList[index].id;
    this.employeeList.splice(index,1);

  this.employeeService.deleteEmployee(employeeId).subscribe();  }

  showDetails(index: number): void {
    this.selectedEmployee = index;
  }

}
