import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Trainer } from '../model/Trainer';
import { TrainerService } from '../services/trainerservice.service';

@Component({
  selector: 'app-personalform',
  templateUrl: './personalform.component.html',
  styleUrls: ['./personalform.component.css']
})
export class PersonalformComponent implements OnInit {

  trainer: Trainer = new Trainer

  constructor(private trainerService: TrainerService,
    private router: Router) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  signup() {
    this.trainerService.insertTrainer(this.trainer).subscribe((resp: Trainer) => {
      this.trainer = resp
      this.trainer = new Trainer
      Swal.fire({
        icon: 'success',
        title: 'Usuário cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/login/personal'])
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
