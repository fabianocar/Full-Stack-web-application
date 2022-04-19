package com.system.service;

import java.util.List;

import com.system.model.Student;

public interface StudentService {

	public Student saveStudent(Student student);
	public List<Student> getAllStudents();
}
