package com.crud.crud;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TeacherServiceStub {
	private static Map<Long, Teacher> teachers = new HashMap<>();
	private static Long index = 2L;
	
	
	
	static {
		
		Teacher teacher1 = new Teacher(1L,"teacher1","11111111111",200000L);
		Teacher teacher2 = new Teacher(2L,"teacher2", "8888888888", 300000L);

		teachers.put(1L, teacher1);
		teachers.put(2L, teacher2);
	}

	public static List<Teacher> getAllTeachers()
	{
		return new ArrayList<>(teachers.values());
	}

	public static Teacher getTeacherDetails(Long teacherId) 
	{
		return teachers.get(teacherId);
	}

	public static Teacher addTeacher(Teacher teacher) {
		index += 1;
		teacher.setId(index);
		teachers.put(index,teacher);
		return teacher;
	}

	public static List<Teacher> updateTeacher(Long id, Teacher teacher) {
		 teacher.setId(id);
		 teachers.put(id,teacher);
        return new ArrayList<>(teachers.values());
	}
	public static Teacher deleteteacher(Long teacherId)
	{
		 return teachers.remove(teacherId);
}
}
