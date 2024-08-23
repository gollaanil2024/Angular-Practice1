import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private httpclient: HttpClient) { }

  // fetchemployee(Url: any) : Observable<employee[]>{ 
  // //  return this.httpclient.get(Url)
  //   return this.httpclient.get<employee[]>(Url);
  // }

  fetchemployee(Url: any): Observable<employee[]> {
    return this.httpclient.get<employee[]>(Url, { observe: 'body' }).pipe(
      map((response: employee[]) => {
        return response.map((emp: employee) => {
          return new employee(emp.id, emp.name, emp.email, emp.address,emp.phone,emp.website,emp.street);
        });
      })
    );
  }	




  Addemployee(Url: any, newemployee: any) {
    return this.httpclient.post(Url, newemployee);
  }

  Deleteemployee(Url: any, empid: any) {
    debugger;
    return this.httpclient.delete(Url+'/'+empid)
  }

}

