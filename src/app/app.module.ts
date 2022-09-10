import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';

import { TlHomeComponent } from './components/team-leader/tl-home/tl-home.component';
import { TlMenuComponent } from './components/team-leader/tl-menu/tl-menu.component';

import { PmMenuComponent } from './components/project-manager/pm-menu/pm-menu.component';
import { PmHomeComponent } from './components/project-manager/pm-home/pm-home.component';
import { ActivatedRoute } from '@angular/router';
import { HrHomeComponent } from './components/hr/hr-home/hr-home.component';
import { HrMenuComponent } from './components/hr/hr-menu/hr-menu.component';
import { InterviwerHomeComponent } from './components/Interviewer/interviwer-home/interviwer-home.component';
import { InterviwerMenuComponent } from './components/Interviewer/interviwer-menu/interviwer-menu.component';
import { AddNewJobDescriptionComponent } from './components/team-leader/add-new-job-description/add-new-job-description.component';
import { AllJobDescrptionComponent } from './components/team-leader/all-job-descrption/all-job-descrption.component';
// import { TeamLeaderComponent } from './components/team-leader/team-leader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    
    TlHomeComponent,
    TlMenuComponent,

    PmMenuComponent,
     PmHomeComponent,
     HrHomeComponent,
     HrMenuComponent,
     InterviwerHomeComponent,
     InterviwerMenuComponent,
     AddNewJobDescriptionComponent,
     AllJobDescrptionComponent,
    // TeamLeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
