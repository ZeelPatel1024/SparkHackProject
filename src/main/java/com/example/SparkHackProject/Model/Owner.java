package com.example.SparkHackProject.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "owners") //database has collections called students
public class Owner {
    @Id
    private String id; //Mongo auto has string id's
    private String name;

    private String password;

    private String email;

    private List<Job> job_listing;

    private List<Business> business_list;

    public Owner(String id, String name, String password, String email, List<Job> job_listing, List<Business> business_list) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.job_listing = job_listing;
        this.business_list = business_list;
    }

    @Override
    public String toString() {
        return "Owner{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", job_listing=" + job_listing +
                ", business_list=" + business_list +
                '}';
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Business> getBusiness_list() {
        return business_list;
    }

    public void setBusiness_list(List<Business> business_list) {
        this.business_list = business_list;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Job> getJob_listing() {
        return job_listing;
    }

    public void setJob_listing(List<Job> job_listing) {
        this.job_listing = job_listing;
    }
}
