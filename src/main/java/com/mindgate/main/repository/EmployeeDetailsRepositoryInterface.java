package com.mindgate.main.repository;

import com.mindgate.main.domain.EmployeeDetails;

public interface EmployeeDetailsRepositoryInterface {

	public EmployeeDetails getEmployeeByLoginId(int loginId);
}
