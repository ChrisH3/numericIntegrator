import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(private http: HttpClient) { }


  public integrate(func: string, method: string) {
    let queryParams = new HttpParams({
      fromObject: {
        function: func,
        method: method
      }
    })


    let url = "http://localhost:8080/integrate/";
    return this.http.get<any>(url, {params: queryParams});
    // console.log("Trying to integrate");
    // return this.http.get<any>("localhost:8080/hello");
  }
}
