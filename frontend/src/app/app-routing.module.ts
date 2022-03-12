import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberformComponent } from './memberform/memberform.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { MemberscheduleComponent } from './memberschedule/memberschedule.component';
import { PersonalformComponent } from './personalform/personalform.component';
import { PersonalloginComponent } from './personallogin/personallogin.component';
import { PersonalschedulesComponent } from './personalschedules/personalschedules.component';
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {path : 'cadastro/aluno' , component: MemberformComponent},
    {path : 'cadastro/personal' , component: PersonalformComponent},
    {path : 'login/aluno', component: MemberloginComponent},
    {path : 'login/personal', component: PersonalloginComponent},
    {path: 'agendamentos/aluno', component: MemberscheduleComponent},
    {path: 'agendamentos/personal', component: PersonalschedulesComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }