import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Redes } from '../model/redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  URL = environment.URL + 'redes/';

  constructor(private http: HttpClient) { }

  public lista(): Observable<Redes[]>{
    return this.http.get<Redes[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Redes>{
    return this.http.get<Redes>(this.URL + `detail/${id}`);
  }

  public save(redes: Redes): Observable<any>{
    return this.http.post<any>(this.URL + 'create', redes);
  }

  public update(id: number, redes: Redes): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, redes);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }

}
