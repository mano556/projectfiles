package com.crud.crud;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeacherController {

	@GetMapping("/teachers")
     public List<Teacher> getAllTeachers() 
	{
		return TeacherServiceStub.getAllTeachers();
	}
	
	
	@GetMapping("/teacher/{teacherId}")
    public Teacher getTeacherDetails(@PathVariable Long teacherId) 
	{
		return TeacherServiceStub.getTeacherDetails(teacherId);
	}
	
	@PostMapping("/addTeacher")
    public Teacher addTeacher(@RequestBody Teacher teacher) 
	{
		return TeacherServiceStub.addTeacher(teacher);
	}
	
	@PutMapping("/updateTeacher/{id}")
    public List<Teacher> updateTeacher (@PathVariable Long id, @RequestBody Teacher teacher) 
	{
		return  TeacherServiceStub.updateTeacher(id,teacher);
	}
	

    @DeleteMapping("/deleteTeacher/{teacherId}")
    public Teacher deleteTeacher (@PathVariable Long teacherId) 
    {
    	return TeacherServiceStub.deleteteacher(teacherId);
    

}
}
