package com.example.SparkHackProject.Model;

public class JobRequest {
    private String owner_id;
    private Job job;

    // Getters and Setters


    public String getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(String owner_id) {
        this.owner_id = owner_id;
    }

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }
}
