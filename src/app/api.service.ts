import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  postData(data: any): Observable<any> {
    return this.http.post<string>(`${this.baseUrl}/auth/signin`, data)
  }

  insertBookings(data: any): Observable<any> {
    return this.http.post<string>(`${this.baseUrl}/bookings/insert`, data)
  }

  signupDataForm(data: any): Observable<any> {
    return this.http.post<string>(`${this.baseUrl}/auth/signup`, data)
  }
}
