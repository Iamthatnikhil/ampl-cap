import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // getSomeData(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/data`);
  // }

  // postLike(id: number): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/data/${id}/like`, {});
  // }

  // postDislike(id: number): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/data/${id}/dislike`, {});
  // }

}
