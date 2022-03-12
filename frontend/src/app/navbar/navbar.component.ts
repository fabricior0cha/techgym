import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.router.navigate(['/'])
    environment.email = ''
    environment.id = 0
    environment.name = ''
    Swal.fire({
        icon: 'warning',
        title: 'Logout realizado com sucesso!',
        showConfirmButton: false,
        timer: 1500
    })
  }

  logoutShow(){
    if(environment.email != ''){
      return true
    } else {
      return false
    }
  }

  loginShow(){
    if(environment.email != ''){
      return false
    } else {
      return true
    }
  }

}
