import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly BASE_URL = 'https://localhost:8080/employees';

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.BASE_URL);
  }

  getEmployee(id:number):Observable<Employee> {
    return this.http.get<Employee>(`${this.BASE_URL}/${id}`);
  }
  deleteEmployee(id:number):Observable<Employee[]> {
     this.http.delete(`${this.BASE_URL}/${id}`);
     return this.getEmployees();
  }
  }

 