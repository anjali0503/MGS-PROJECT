package com.mindgate.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.main.domain.EmployeeDetails;
import com.mindgate.main.repository.EmployeeDetailsRepository;
import com.mindgate.main.repository.EmployeeDetailsRepositoryInterface;
@Service
public class EmployeeDetailsService implements EmployeeDetailsServiceInterface {

	@Autowired
	private EmployeeDetailsRepositoryInterface employeeDetailsRepository;
	@Override
	public EmployeeDetails getEmployeeByLoginId(int loginId) {
	
		return employeeDetailsRepository.getEmployeeByLoginId(loginId) ;
	}

}
