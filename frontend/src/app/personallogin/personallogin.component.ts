import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Trainer } from '../model/Trainer';
import { TrainerDTO } from '../model/TrainerDTO';
import { TrainerService } from '../services/trainerservice.service';

@Component({
  selector: 'app-personallogin',
  templateUrl: './personallogin.component.html',
  styleUrls: ['./personallogin.component.css']
})
export class PersonalloginComponent implements OnInit {

  trainer: TrainerDTO = new TrainerDTO

  constructor(private trainerService: TrainerService,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.trainerService.loginTrainer(this.trainer).subscribe((resp : Trainer) =>{
      environment.email = resp.email
      environment.name = resp.name
      environment.id = resp.id
      Swal.fire({
        icon: 'success',
        title: 'Login realizado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/agendamentos/personal'])
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
