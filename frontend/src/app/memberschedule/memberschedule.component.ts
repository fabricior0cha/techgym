import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Client } from '../model/Client';
import { Scheduling } from '../model/Scheduling';
import { SchedulingDTO } from '../model/SchedulingDTO';
import { Trainer } from '../model/Trainer';
import { ClientService } from '../services/client.service';
import { SchedulesService } from '../services/schedules.service';
import { TrainerService } from '../services/trainerservice.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-memberschedule',
  templateUrl: './memberschedule.component.html',
  styleUrls: ['./memberschedule.component.css']
})
export class MemberscheduleComponent implements OnInit {

  clientEmail  : string = ''

  idClient = environment.id
  client: Client = new Client
  clientSchedulings: Scheduling[]
  schedulings: Scheduling[]

  trainers: Trainer[]
   datepipe: DatePipe = new DatePipe('en-US')


  schedulingDTO: SchedulingDTO =  new SchedulingDTO
  emailTrainer : string = ''
  dateSchedule: Date = new Date()

  constructor(private router: Router,
   private clientService: ClientService,
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
    this.findByIdClient()
    this.findAll()
    this.findAllTrainers()
  }

  findAll(){
    this.schedulesService.findAll().subscribe((resp: Scheduling[]) =>{
      this.schedulings = resp
    })
  }

  findByIdClient(){
    this.clientService.findById(this.idClient).subscribe((resp : Client) =>{
      this.client = resp
      this.clientEmail =  resp.email
      this.clientSchedulings = resp.schedulings
    })
  }


  findAllTrainers(){
    this.trainerService.findAll().subscribe((resp : Trainer[]) => {
      this.trainers = resp
    })
  }

  saveSchedule(){
    this.findByIdClient()
    this.schedulingDTO.trainerEmail = this.emailTrainer
    this.schedulingDTO.clientEmail = this.clientEmail
    this.schedulingDTO.date = this.dateSchedule
    this.schedulesService.post(this.schedulingDTO).subscribe((resp : Scheduling) => {
      this.findByIdClient()
      this.findAll()
      Swal.fire({
        icon: 'success',
        title: 'Treino agendado com sucesso!',
        showConfirmButton: false,
        timer: 2500
      })
      this.emailTrainer = ''
      this.dateSchedule = new Date()
      this.schedulingDTO = new SchedulingDTO
      this.findByIdClient()
      this.findAll()
    },error => {
      Swal.fire({
        icon: 'error',
        title: 'Confira se os dados estão corretos!',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  delete(id: number){
    this.schedulesService.delete(id).subscribe(()=>{
      Swal.fire({
        icon: 'warning',
        title: 'Treino cancelado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      this.findByIdClient()
      this.findAll()
    })
  }



}
