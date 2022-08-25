package com.example.demo;


import org.springframework.data.annotation.Id;

public class login {
    @Id
    private String id;
    private String password;
    public String getId() {
        return id;
    }
    public String getPswd() {
        return password;
    }
    public void setId(String id) {
        this.id = id;
    }
    public void setPswd(String pswd) {
        this.password = pswd;
    }
    public login() {
    }
    public login(String id, String password) {
        this.id = id;
        this.password = password;
    }

    

    
}