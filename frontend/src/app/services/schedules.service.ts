import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scheduling } from '../model/Scheduling';
import { SchedulingDTO } from '../model/SchedulingDTO';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Scheduling[]>{
    return this.http.get<Scheduling[]>('http://localhost:8080/schedulings')
  }

  post(dto: SchedulingDTO): Observable<Scheduling>{
    return this.http.post<Scheduling>('http://localhost:8080/schedulings', dto)
  }
  delete(id : number){
    return this.http.delete(`http://localhost:8080/schedulings/${id}`)
  }
}
