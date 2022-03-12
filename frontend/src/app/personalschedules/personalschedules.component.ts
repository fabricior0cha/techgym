import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Scheduling } from '../model/Scheduling';
import { Trainer } from '../model/Trainer';
import { SchedulesService } from '../services/schedules.service';
import { TrainerService } from '../services/trainerservice.service';

@Component({
  selector: 'app-personalschedules',
  templateUrl: './personalschedules.component.html',
  styleUrls: ['./personalschedules.component.css']
})
export class PersonalschedulesComponent implements OnInit {

  name: string = environment.name

  schedulings: Scheduling[]

  personalSchedulings: Scheduling[]

  trainer : Trainer = new Trainer
  idTrainer = environment.id

  objective: String
  
  constructor(private router: Router,
    private schedulesService: SchedulesService,
    private trainerService: TrainerService) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.email == ''){
      this.router.navigate(['/login/personal'])
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Você não está logado!',
        showConfirmButton: false
      
      })
    }
    this.findByIdTrainer()
    this.findAll()
        
  }


  findAll(){
    this.schedulesService.findAll().subscribe((resp: Scheduling[]) =>{
      this.schedulings = resp
    })
  }

  findByIdTrainer(){
    this.trainerService.findById(this.idTrainer).subscribe((resp : Trainer) =>{
      this.trainer = resp
      this.personalSchedulings = resp.schedulings
    })
  }
  

}
