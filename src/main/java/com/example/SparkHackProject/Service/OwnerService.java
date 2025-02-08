package com.example.SparkHackProject.Service;

import com.example.SparkHackProject.Controller.BusinessController;
import com.example.SparkHackProject.Controller.JobController;
import com.example.SparkHackProject.Controller.OwnerController;
import com.example.SparkHackProject.Model.Business;
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

    BusinessController businessController;

    public OwnerService(JobController jobController, BusinessController businessController) {
        this.jobController = jobController;
        this.businessController = businessController;
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

    public void addBusiness(String owner_id, Business business){

        Owner owner = getOwnerId(owner_id);
        List<Business> current_businesses = owner.getBusiness_list();
        current_businesses.add(business);
        owner.setBusiness_list(current_businesses);
        deleteOwner(owner_id);
        saveOrUpdate(owner);
        businessController.saveBusiness(business);
    }


    public Optional<Owner> getOwnerByEmail(String email) {
        return ownerRepo.findByEmail(email);
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
