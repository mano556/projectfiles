package com.example.demo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
//import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Collection_2")
public class Book {
	
    @Id
    String id;
    String bookname;
    String author;
    String  totalcopy;
    String avilablecopy;

    public String getId() {
        return id;
    }
    public String getBookname() {
        return bookname;
    }
    public String getAuthor() {
        return author;
    }
    public String getTotalcopy() {
        return totalcopy;
    }
    public String getAvilablecopy() {
        return avilablecopy;
    }
    public void setId(String id) {
        this.id = id;
    }
    public void setBookname(String bookname) {
        this.bookname = bookname;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    public void setTotalcopy(String totalcopy) {
        this.totalcopy = totalcopy;
    }
    public void setAvilablecopy(String avilablecopy) {
        this.avilablecopy = avilablecopy;
    }
    public Book(String id, String bookname, String author, String totalcopy, String avilablecopy) {
        this.id = id;
        this.bookname = bookname;
        this.author = author;
        this.totalcopy = totalcopy;
        this.avilablecopy = avilablecopy;
    }
    public Book() {
    }
}