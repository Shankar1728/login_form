package com.example.login.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.login.dto.LoginDTO;
import com.example.login.model.User;
import com.example.login.repository.LoginRepository;

@Service
public class LoginService{

	
	@Autowired
	LoginRepository lr;
	
	public User create(LoginDTO l) {
		User u =new User();
		u.setUsername(l.getUsername());
		u.setPassword(l.getPassword());
		return lr.save(u);
	}
	public List<User> getAllDetails() {
		return lr.findAll();
	}
	public User getById(String str) {
		return lr.findById(str).orElse(null);
	}
	
	public String valid(LoginDTO l) {
//		User u =new User();
//		u = lr.findById(l.getUsername()).orElse(null);
//
//		if(u == null)
//			return "In-Valid User Name...";
//		else if(l.getPassword().equals(u.getPassword()))
//			return "Valid User !";
//		else
//			return "Oops, In-valid password...";
		User u = lr.findByUsername(l.getUsername());
		if(l.getPassword().equals("") && l.getUsername().equals(""))
			return "please enter details";
		else if(u == null)
			return "In-Valid User Name...";
		else if(l.getPassword().equals(u.getPassword()))
			return "Valid User !";
		else
			return "Oops, In-valid password...";
	}
}