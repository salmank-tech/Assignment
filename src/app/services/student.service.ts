import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const BASE_URL = "https://reqres.in/api/";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  getList(): Observable<any> {
    return this.httpClient.get(`${BASE_URL}users`);
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(`${BASE_URL}users/${id}`);
  }

  save(data: any): Observable<any> {
    return this.httpClient.post(`${BASE_URL}users`, data);
  }
}
