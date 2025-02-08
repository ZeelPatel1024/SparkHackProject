package com.example.SparkHackProject.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "owners") //database has collections called students
public class Owner {
    @Id
    private String id; //Mongo auto has string id's
    private String name;

    private String business_id;

    private String business_name;

    private List<Job> job_listing;

    //jobs, finances,


    public Owner(String id, String name, String business_id, String business_name, List<Job> job_listing) {
        this.id = id;
        this.name = name;
        this.business_id = business_id;
        this.business_name = business_name;
        this.job_listing = job_listing;
    }

    @Override
    public String toString() {
        return "Owner{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", business_id='" + business_id + '\'' +
                ", business_name='" + business_name + '\'' +
                ", job_listing=" + job_listing +
                '}';
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

    public String getBusiness_id() {
        return business_id;
    }

    public void setBusiness_id(String business_id) {
        this.business_id = business_id;
    }

    public String getBusiness_name() {
        return business_name;
    }

    public void setBusiness_name(String business_name) {
        this.business_name = business_name;
    }

    public List<Job> getJob_listing() {
        return job_listing;
    }

    public void setJob_listing(List<Job> job_listing) {
        this.job_listing = job_listing;
    }
}
