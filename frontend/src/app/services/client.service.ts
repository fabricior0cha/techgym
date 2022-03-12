import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Client } from '../model/Client';
import { Observable } from 'rxjs';
import { ClientDTO } from '../model/ClientDTO';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  insertClient (client : Client): Observable<Client>{
    return this.http.post<Client>("http://localhost:8080/clients", client);
  }

  loginClient (client : ClientDTO): Observable<Client>{
    return this.http.put<Client>("http://localhost:8080/clients", client)
  }

  findById(id: number): Observable<Client>{
    return this.http.get<Client>(`http://localhost:8080/clients/${id}`)
  }

}
