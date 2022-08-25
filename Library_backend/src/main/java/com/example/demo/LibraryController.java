package com.example.demo;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class LibraryController {
	@Autowired
	LibraryRepository repository;
	
	@Autowired
	bookrepository bookrepository;
	
	
	@GetMapping("/view")
	public List<Library> viewdb()
	{
		return repository.findAll();
	}
	@GetMapping("/views/id/")
	public Optional<Library> viewdbbyid(@RequestParam String id)
	{
		return repository.findById(id);
	}
//	for viwing book
	@GetMapping("/show/book")
	public List<Book> viewbook()
	{
		return bookrepository.findAll();
	}
//	login validation
	@PostMapping("/login")
	public Library  login_db(@RequestBody Library library){
		String email=library.getEmail();
		String password=library.getPassword();
		Library data=null;
		List<Library> a = repository.findAll();
		for(int i=0;i<a.size();i++) {
			Library b=a.get( i);
			if (email.equals(b.getEmail())&& password.equals(b.getPassword())) {
				data=b;
				System.out.println(b.getEmail());
			}
		}
		return data;
		}

	@PostMapping("/add")
	public void  adddb(@RequestBody Library library){
		repository.save(library);}
	
//	for adding books
	@PostMapping("/addbook")
	public void  addbook(@RequestBody Book bk){
		System.out.println(bk.getBookname());
		bookrepository.save(bk);}
//	public String  addbook(@RequestBody Book  bk){
//		System.out.println(bk.getBookname());
//		bookrepository.save(bk);
//		return "datasave";
//	}
//for editing books	
	@PutMapping("/Edit/{ISBN_NO}")
	public List<Book> Editbook(@RequestBody Book bk){
	bookrepository.save(bk);
	
	return bookrepository.findAll();
}
//	for deleting books
	@DeleteMapping("bookdelete/{ISBN_NO}")
	public List<Book> deletebook(@PathVariable String id) 
{
		 bookrepository.deleteById(id);
		 return bookrepository.findAll();
}
	
	
	
	
	
	

	
	@PutMapping("/update/{id}")
	public List<Library> updatedb(@RequestBody Library library){
	repository.save(library);
	
	return repository.findAll();
}
	@DeleteMapping("delete/{id}")
	public List<Library> deletedb(@PathVariable String id) 
{
		 repository.deleteById(id);
		 return repository.findAll();
}
//	//for login
//	@PostMapping("/login/validation")
//	private Library check(@RequestBody Library library)
//	{
//		String email=library.getEmail();
//		String psw=library.getPassword();
//		
//		
//		
//		List<Library> data=repository.findByEmail(email);
//		System.out.println(data);
//
//		System.out.println(data.get(0));
//
//Library lib=null;
//		String pasw=data.get(0).password;
//		String type=data.get(0).type;
//		for(int i=0;i<=data.size();i++)
//		  {
//		   lib=data.get(i);
//			System.out.println(lib.getId());
//		
//
//		if(psw.equals(pasw))
//		{
//          lib.setPassword(null);
//			break;
//		}
//		else{
//			return null;
//		}
//	}
//		System.out.println(lib.getPassword());
//	return lib;
//		
//
//
//		}
}
