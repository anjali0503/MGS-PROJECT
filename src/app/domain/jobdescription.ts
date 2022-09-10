import { EmployeeDetails } from "./employee";
import { ProjectDetails } from "./project";

export class JobDescriptionDetails {

    jobId: number = 0;
    EmployeeId: number = 0;
    skill1: string = "";
    skill2: string = "";
    skill3: string = "";
    projectId: string = "";
    jobStatus: string = "";
    RequiredCandidate: number = 0;
    employeeDetails:EmployeeDetails= new EmployeeDetails();
    projectDetails :ProjectDetails=new ProjectDetails();

}



