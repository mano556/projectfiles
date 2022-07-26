package com.crud.crud;

public class Teacher {

	private Long id;

	private String name;

	private String mobileNo;
	
	private Long salary;
	
	
	
	public Teacher(Long id, String name, String mobileNo, Long salary) {
		super();
		this.id = id;
		this.name = name;
		this.mobileNo = mobileNo;
		this.salary = salary;
//		this.STD = STD;
	}

	public Teacher() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public Long getSalary() {
		return salary;
	}

	public void setSalary(Long salary) {
		this.salary = salary;
	}

	


	
}
