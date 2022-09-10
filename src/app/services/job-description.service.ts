import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobDescriptionDetails } from '../domain/jobdescription';

@Injectable({
  providedIn: 'root'
})
export class JobDescriptionService {
  private baseURL :string="http://localhost:8080/jobdescriptionapi";

  constructor(private httpClient :HttpClient) { }

  addJobDescription(jobdescription  : JobDescriptionDetails): Observable<JobDescriptionDetails>{
    console.log("in add new job");
    console.log(jobdescription);
    return this.httpClient.post<JobDescriptionDetails>(this.baseURL,jobdescription);
  }
  getAllJobDescription(employeeId:number):Observable<JobDescriptionDetails[]>{
    console.log("in all job description");
    return this.httpClient.get<JobDescriptionDetails[]>(this.baseURL+"/getbyemployeeid/" + employeeId);
  }
  
}
