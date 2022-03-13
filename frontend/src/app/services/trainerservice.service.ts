import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from '../model/Trainer';
import { TrainerDTO } from '../model/TrainerDTO';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  insertTrainer (trainer : Trainer) : Observable<Trainer>{
    return this.http.post<Trainer>("https://app-fabricio-techgym.herokuapp.com/trainers", trainer)
  }

  loginTrainer (trainer : TrainerDTO): Observable<Trainer>{
    return this.http.put<Trainer>("https://app-fabricio-techgym.herokuapp.com/trainers", trainer)
  }

  findById(id: number): Observable<Trainer>{
    return this.http.get<Trainer>(`https://app-fabricio-techgym.herokuapp.com/trainers/${id}`)
  }

  findAll(): Observable<Trainer[]>{
    return this.http.get<Trainer[]>("https://app-fabricio-techgym.herokuapp.com/trainers")
  }
}
