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
    return this.http.post<Client>("https://app-fabricio-techgym.herokuapp.com/clients", client);
  }

  loginClient (client : ClientDTO): Observable<Client>{
    return this.http.put<Client>("https://app-fabricio-techgym.herokuapp.com/clients", client)
  }

  findById(id: number): Observable<Client>{
    return this.http.get<Client>(`https://app-fabricio-techgym.herokuapp.com/clients/${id}`)
  }

}
