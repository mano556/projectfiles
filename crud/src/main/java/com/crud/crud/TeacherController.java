package com.crud.crud;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeacherController {


	@Autowired
	TeacherRepository repository;
	
//Below Mappings are Mongodb mapping
	@GetMapping("/view")
	public List<Teacher> viewdb()
	{
		return repository.findAll();
	}
//	By using RequestPharam
	@GetMapping("/views/test/")
	public Optional<Teacher> viewdbbyid(@RequestParam Long id)
	{
		return repository.findById(id);
	}
	
	@PostMapping("/add")
	public List<Teacher> adddb(@RequestBody Teacher teach){
		repository.save(teach);
		
		return repository.findAll();
	}
	@PutMapping("/update/{id}")
		public List<Teacher> updatedb(@RequestBody Teacher teach){
		repository.save(teach);
		
		return repository.findAll();
	}
	@DeleteMapping("delete/{id}")
		public List<Teacher> deletedb(@PathVariable Long id) 
	{
			 repository.deleteById(id);
			 return repository.findAll();
	}
	
	
	
	
	
	
	
//	Belows Mappings are service Mapping
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
