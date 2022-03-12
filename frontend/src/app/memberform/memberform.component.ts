import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Client } from '../model/Client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-memberform',
  templateUrl: './memberform.component.html',
  styleUrls: ['./memberform.component.css']
})
export class MemberformComponent implements OnInit {

  client : Client = new Client
  objective : string 

  constructor(private memberService: ClientService,
    private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  signup (){
    this.client.objective = Number(this.objective)
    this.memberService.insertClient(this.client).subscribe((resp : Client) =>{
      this.client = resp
      this.client = new Client
      this.router.navigate(['/login/aluno'])
      Swal.fire({
        icon: 'success',
        title: 'Usuário cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 2500
      })
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Confira se os dados estão corretos!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    )
  }

}
