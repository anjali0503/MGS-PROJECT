import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrHomeComponent } from './components/hr/hr-home/hr-home.component';
import { HrMenuComponent } from './components/hr/hr-menu/hr-menu.component';
import { InterviwerHomeComponent } from './components/Interviewer/interviwer-home/interviwer-home.component';
import { InterviwerMenuComponent } from './components/Interviewer/interviwer-menu/interviwer-menu.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { PmHomeComponent } from './components/project-manager/pm-home/pm-home.component';
import { PmMenuComponent } from './components/project-manager/pm-menu/pm-menu.component';
import { AddNewJobDescriptionComponent } from './components/team-leader/add-new-job-description/add-new-job-description.component';
import { AllJobDescrptionComponent } from './components/team-leader/all-job-descrption/all-job-descrption.component';
import { TlHomeComponent } from './components/team-leader/tl-home/tl-home.component';
import { TlMenuComponent } from './components/team-leader/tl-menu/tl-menu.component';


const routes: Routes = [
  {path:"" , component: MenuComponent},
  {path:"loginpage",component: LoginComponent},
  {path:"HomeTLpage",component:TlHomeComponent},
  {path:"HomePMpage",component:PmHomeComponent},
  {path:"HomeHRpage",component:HrHomeComponent},
  {path:"HomeInterviewerpage",component:InterviwerHomeComponent},
  
  {path:"MenuTLpage",component:TlMenuComponent},
  {path:"MenuPMpage",component:PmMenuComponent},
  {path:"MenuHRpage",component:HrMenuComponent},
  {path:"MenuInterviewerpage",component:InterviwerMenuComponent},

  {path:"addnewjobdescription",component:AddNewJobDescriptionComponent},
  {path:"alljobdescription",component:AllJobDescrptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


