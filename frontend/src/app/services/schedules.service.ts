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
    return this.http.get<Scheduling[]>('https://app-fabricio-techgym.herokuapp.com/schedulings')
  }

  post(dto: SchedulingDTO): Observable<Scheduling>{
    return this.http.post<Scheduling>('https://app-fabricio-techgym.herokuapp.com/schedulings', dto)
  }
  delete(id : number){
    return this.http.delete(`https://app-fabricio-techgym.herokuapp.com/schedulings/${id}`)
  }
}
