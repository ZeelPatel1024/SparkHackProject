package com.example.SparkHackProject.Service;

import com.example.SparkHackProject.Model.Job;
import com.example.SparkHackProject.Model.Owner;
import com.example.SparkHackProject.Repo.JobRepo;
import com.example.SparkHackProject.Repo.OwnerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class JobService {
    @Autowired
    JobRepo jobRepo;

    public void saveOrUpdate(Job job) {
        jobRepo.save(job); //If in db then update if not then add
    }

    public Iterable<Job> listAll() {
        return this.jobRepo.findAll(); //Get all students in db
    }

    public void deleteJob(String id) {
        jobRepo.deleteById(id);
    }

    public Job getJobId(String jobId) {
        return jobRepo.findById(jobId).get();
    }
}
