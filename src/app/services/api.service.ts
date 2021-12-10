import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://127.0.0.1:8000/api/'

  constructor(
    private http: HttpClient
  ) { }

  public getHello(): Observable<any> {
    return this.http.get(environment.apiHost + '/hello');
  }

  public getData(): Observable<any> {
    return this.http.get(environment.apiHost + '/dataAtual');
  }

  public postData(text: String): Observable<any> {
    return this.http.post(`${environment.apiHost}/dataAtual/${text}`, text);

  }
}
