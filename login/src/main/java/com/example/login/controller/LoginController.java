package com.example.login.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.login.dto.LoginDTO;
import com.example.login.model.User;
import com.example.login.service.LoginService;

@CrossOrigin("*")
@RestController
public class LoginController{
	
	@Autowired
	LoginService ls;
	/*
	@GetMapping("/a")
	public String test1(@RequestParam("name") String str) {
		return "Your Name : "+str;
	}

	@RequestMapping(value = "/b", method = RequestMethod.GET)
	public String test2(@RequestHeader("name") String str) {
		return "Name : "+str;
	}
	@PostMapping("/{c}")
	public String test3(@PathVariable String c) {
		return "naam : "+c;
	}*/
	
	@PostMapping("/add")
	public	int create(@RequestBody LoginDTO l) {
		ls.create(l);
		return 1;
	}
	@PostMapping("/login")
	public String login(@RequestBody LoginDTO l) {
		return ls.valid(l);
	}
	
	
	@GetMapping("/all")
	public List<User> getAllDetails(){
		return ls.getAllDetails();
	}
	
	@GetMapping("/byId")
	public User getById(@RequestParam("name") String str) {
		return ls.getById(str);
	}

}