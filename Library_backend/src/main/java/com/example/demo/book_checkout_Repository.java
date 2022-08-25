package com.example.demo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface book_checkout_Repository  extends MongoRepository<bookcheckout,String>{

    List<bookcheckout> findByuserid(String userid);

    void deleteBybukid(String bukid);
    
}
