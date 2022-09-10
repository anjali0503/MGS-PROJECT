import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobDescriptionDetails } from 'src/app/domain/jobdescription';
import { JobDescriptionService } from 'src/app/services/job-description.service';

@Component({
  selector: 'app-add-new-job-description',
  templateUrl: './add-new-job-description.component.html',
  styleUrls: ['./add-new-job-description.component.css']
})
export class AddNewJobDescriptionComponent implements OnInit {

  jobdescription  : JobDescriptionDetails = new JobDescriptionDetails();
  submitted : boolean=false;
  constructor(private jobDescriptionService : JobDescriptionService,
    private router : Router
    ) { }
  
  ngOnInit(): void {
  }

  addJobDescription(){
    console.log("in addJobDescription()");
    console.log(this.jobdescription);
    this.jobDescriptionService.addJobDescription(this.jobdescription).subscribe(
      data =>{
        this.jobdescription=data;
        console.log(this.addJobDescription);
        

})

  }
  backtohome(){
    console.log("backtohome()");
    this.router.navigate(['']);
    
  
  }
}