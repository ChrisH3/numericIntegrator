import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(private http: HttpClient) { }


  public integrate(func: string, a: string, b: string, method: string) {
    let queryParams = new HttpParams({
      fromObject: {
        function: func.replaceAll("+", "%2B"),
        a: a,
        b: b,
        method: method
      }
    })


    let url = "http://localhost:8080/integrate/";
    return this.http.get<any>(url, {params: queryParams});
    // console.log("Trying to integrate");
    // return this.http.get<any>("localhost:8080/hello");
  }
}
