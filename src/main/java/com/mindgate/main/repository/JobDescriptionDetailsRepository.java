package com.mindgate.main.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.mindgate.main.domain.JobDescriptionDetails;

@Repository
public class JobDescriptionDetailsRepository implements JobDescriptionDetailsRepositoryInterface {

	private final static String GET_ALL = "Select a.job_id,a.employee_id,a.skill_1,a.skill_2,a.skill_3,a.project_id,c.project_name,c.project_cost ,a.job_status,a.Required_candidate,b.Ename,b.Salary,b.Designation,b.Login_Id,b.MGR,b.Skill_1,b.Skill_2,b.Skill_3,b.Status from job_description_details a,employee_details b,project_details c where a.employee_id = b.employee_id and a.project_id=c.project_id";
	private final static String GET_BY_EMPLOYEE_ID = "Select a.job_id,a.employee_id,a.skill_1,a.skill_2,a.skill_3,a.project_id,c.project_name,c.project_cost ,a.job_status,a.Required_candidate,b.Ename,b.Salary,b.Designation,b.Login_Id,b.MGR,b.Skill_1,b.Skill_2,b.Skill_3,b.Status from job_description_details a,employee_details b,project_details c where a.employee_id = b.employee_id and a.project_id=c.project_id and b.employee_id=?";
	private final static String INSERT_DESCRIPTION ="insert into job_description_details values(?,?,?,?,?,?,?)";
			
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<JobDescriptionDetails> getAllDescription() {
		List<JobDescriptionDetails> getallList = jdbcTemplate.query(GET_ALL, new JobDescriptionDetailsRowmapper());
		return getallList;
	}

	@Override
	public List<JobDescriptionDetails> getJobDescriptionByemployeeId(int employeeId) {
		System.out.println(employeeId);
		return jdbcTemplate.query(GET_BY_EMPLOYEE_ID, new JobDescriptionDetailsRowmapper(), employeeId);

	}

	@Override
	public boolean addJobDescription(JobDescriptionDetails jobDescriptionDetails) {
	System.out.println(jobDescriptionDetails);
	Object[] params= {jobDescriptionDetails.getSkill1(),jobDescriptionDetails.getSkill2(),jobDescriptionDetails.getSkill3(),jobDescriptionDetails.getJobStatus(),jobDescriptionDetails.getRequiredCandidate(),jobDescriptionDetails.getEmployeeDetails(),jobDescriptionDetails.getProjectDetails()};
	int result=jdbcTemplate.update(INSERT_DESCRIPTION,params);
		if(result>0)
			return true;
		return false;
		
	}

	
	

}
