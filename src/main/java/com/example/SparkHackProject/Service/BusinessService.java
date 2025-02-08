package com.example.SparkHackProject.Service;

import com.example.SparkHackProject.Model.Business;
import com.example.SparkHackProject.Model.Job;
import com.example.SparkHackProject.Repo.BusinessRepo;
import com.example.SparkHackProject.Repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BusinessService {

    @Autowired
    BusinessRepo businessRepo;

    public void saveOrUpdate(Business business) {
        businessRepo.save(business); //If in db then update if not then add
    }

    public Iterable<Business> listAll() {
        return this.businessRepo.findAll(); //Get all students in db
    }

    public void deleteBusiness(String id) {
        businessRepo.deleteById(id);
    }

    public Business getBusinessId(String businessId) {
        return businessRepo.findById(businessId).get();
    }

}
