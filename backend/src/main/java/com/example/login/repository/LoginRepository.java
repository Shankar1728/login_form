package com.example.login.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.login.model.User;

@Repository
public interface LoginRepository extends MongoRepository<User, String>{
	
	@Query("{'username' : ?0}")
	User findByUsername(String str);
}
