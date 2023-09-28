

import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']

})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  isFormValid: boolean = false;


  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.goToEmployeeList();
      },
      (error) => console.log(error)
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    console.log(this.employee);
    alert("Employee Created Successfully")
    this.saveEmployee();
  }


  validateForm() {
    this.isFormValid = false;

    if (
      this.employee.name &&
      this.employee.name.length >= 3 &&
      this.employee.emailId &&
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(this.employee.emailId)
    ) {
      this.isFormValid = true;
    }
  }
  goBack() {
    window.history.back();

  }

}



