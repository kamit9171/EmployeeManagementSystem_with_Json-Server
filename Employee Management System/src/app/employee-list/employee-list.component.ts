

import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  //styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees ! : Employee[];
  filteredEmp !:Employee[];
  nameFilter : string='';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data) => {
      this.employees = data;
      this.filteredEmp= data;
    });
  }

  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      this.getEmployees();
    });
  }
  applyFilter() {
    this.filteredEmp = this.employees.filter(employee => {
    //return employee.name.toLowerCase().includes(this.nameFilter.toLowerCase());
    return employee.name.toLowerCase().startsWith(this.nameFilter.toLowerCase());

    });
    }
    
  }



