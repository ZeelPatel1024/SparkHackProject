package com.example.SparkHackProject.Service;

import com.example.SparkHackProject.Controller.JobController;
import com.example.SparkHackProject.Controller.OwnerController;
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
public class OwnerService {

    @Autowired
    OwnerRepo ownerRepo;

    JobController jobController;

    public OwnerService(JobController jobController) {
        this.jobController = jobController;
    }

    public void saveOrUpdate(Owner owner) {
        ownerRepo.save(owner); //If in db then update if not then add
    }

    public void addJobListing(String owner_id, Job job){

        Owner owner = getOwnerId(owner_id);
        List<Job> current_jobs = owner.getJob_listing();
        current_jobs.add(job);
        owner.setJob_listing(current_jobs);
        deleteOwner(owner_id);
        saveOrUpdate(owner);
        jobController.saveJob(job);
    }

    public Iterable<Owner> listAll() {
        return this.ownerRepo.findAll(); //Get all students in db
    }

    public void deleteOwner(String id) {
        ownerRepo.deleteById(id);
    }

    public Owner getOwnerId(String ownerId) {
        return ownerRepo.findById(ownerId).get();
    }

    public List<Job> getJobListing(String ownerId){
        Optional<Owner> owner = ownerRepo.findById(ownerId);

        if(owner == null){
            return Collections.emptyList();
        }
        return owner.get().getJob_listing();
    }

}
