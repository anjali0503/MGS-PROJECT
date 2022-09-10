package com.mindgate.main.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.mindgate.main.domain.EmployeeDetails;
@Repository
public class EmployeeDetailsRepository implements EmployeeDetailsRepositoryInterface{

	private final static String GET_EMPLOYEE_BY_LOGIN_ID ="SELECT * FROM EMPLOYEE_DETAILS WHERE LOGIN_ID=?";

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public EmployeeDetails getEmployeeByLoginId(int loginId) {
		EmployeeDetails employeeDetails=jdbcTemplate.queryForObject(GET_EMPLOYEE_BY_LOGIN_ID, new EmployeeDetailsRowMapper(),loginId);
		return employeeDetails;
	}


}
