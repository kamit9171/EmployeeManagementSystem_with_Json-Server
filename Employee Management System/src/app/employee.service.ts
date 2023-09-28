import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable()
export class EmployeeService {

  //For Json Server  
  //baseURL:string="http://localhost:3000/Employee"; 
  baseURL:string="https://test-2qme.onrender.com/Employee";
   //Json server Deafult Server   //Run on differenct server --server 

   constructor(private httpClient: HttpClient) { }

  
  
  getEmployeesList(): Observable<Employee[]> {
  
    //return this.httpClient.get<Song[]>(this.url);
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
  
    //return this.httpClient.post<Song>(this.url,song);
    return this.httpClient.post(`${this.baseURL}`, employee);
  }


  updateEmployee(id: number, employee: Employee): Observable<Object> {
  
    //return this.httpClient.put<Song>(this.url+"/"+song.id,song);
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>
  {
    //return this.httpClient.delete<Song>(this.url+"/"+song.id);
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
   

  getEmployeeById(id: number): Observable<Employee>  {
    //return this.httpClient.get<Song>(this.url+"/"+id)    
  return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
}}

