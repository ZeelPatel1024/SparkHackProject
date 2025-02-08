package com.example.SparkHackProject.Controller;

import com.example.SparkHackProject.Model.*;
import com.example.SparkHackProject.Service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*") //Needed to connect to frontend application
@RequestMapping("api/v1/owner")
public class OwnerController {

    @Autowired
    private OwnerService ownerService;

    @PostMapping(value="/save") // Save owner
    public String saveOwner(@RequestBody Owner owner){
        ownerService.saveOrUpdate(owner);
        return owner.getId();
    }

    @PostMapping(value="/saveJob") // Save owner
    public String saveJob(@RequestBody JobRequest jobRequest){
        ownerService.addJobListing(jobRequest.getOwner_id(), jobRequest.getJob());
        return jobRequest.getOwner_id();
    }

    @PostMapping(value="/saveBusiness") // Save owner
    public String saveBusiness(@RequestBody BusinessRequest businessRequest){
        ownerService.addBusiness(businessRequest.getOwner_id(), businessRequest.getBusiness());
        return businessRequest.getOwner_id();
    }

    @GetMapping(value="/getAll") // get all owners
    private Iterable<Owner> getOwners(){
        return ownerService.listAll();
    }

    @PutMapping(value="/edit/{id}") //edit owners
    private Owner update(@RequestBody Owner owner, @PathVariable(name="id") String id){
        owner.setId(id);
        ownerService.saveOrUpdate(owner);
        return owner;
    }

    @DeleteMapping("/delete/{id}") //delete owner by id
    private void deleteOwner(@PathVariable("id") String id){
        ownerService.deleteOwner(id);
    }

    @RequestMapping("/search/{id}") //search an owner by id
    private Owner getOwners(@PathVariable(name = "id") String owner_id){
        return ownerService.getOwnerId(owner_id);
    }

    @RequestMapping("/login") //search an owner by id
    public Optional<Owner> getOwnerByEmail(@RequestBody EmailRequest request) {
        return ownerService.getOwnerByEmail(request.getEmail());
    }

    @RequestMapping("/search_job_listing/{id}") // search a job listing by owner id
    private List<Job> getJobListing(@PathVariable(name = "id") String owner_id){
        return ownerService.getJobListing(owner_id);
    }

}
