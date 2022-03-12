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
    return this.http.post<Trainer>("http://localhost:8080/trainers", trainer)
  }

  loginTrainer (trainer : TrainerDTO): Observable<Trainer>{
    return this.http.put<Trainer>("http://localhost:8080/trainers", trainer)
  }

  findById(id: number): Observable<Trainer>{
    return this.http.get<Trainer>(`http://localhost:8080/trainers/${id}`)
  }

  findAll(): Observable<Trainer[]>{
    return this.http.get<Trainer[]>("http://localhost:8080/trainers")
  }
}
