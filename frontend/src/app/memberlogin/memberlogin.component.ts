import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Client } from '../model/Client';
import { ClientDTO } from '../model/ClientDTO';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-memberlogin',
  templateUrl: './memberlogin.component.html',
  styleUrls: ['./memberlogin.component.css']
})
export class MemberloginComponent implements OnInit {

  client: ClientDTO = new ClientDTO

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  login(){
    this.clientService.loginClient(this.client).subscribe((resp : Client) =>{
      environment.email = resp.email
      environment.name = resp.name
      environment.id = resp.id
      Swal.fire({
        icon: 'success',
        title: 'Login realizado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/agendamentos/aluno'])
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Confira se os dados estão corretos!',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}
