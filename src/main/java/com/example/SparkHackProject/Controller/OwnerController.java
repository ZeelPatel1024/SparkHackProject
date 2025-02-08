package com.example.SparkHackProject.Controller;

import com.example.SparkHackProject.Model.Job;
import com.example.SparkHackProject.Model.JobRequest;
import com.example.SparkHackProject.Model.Owner;
import com.example.SparkHackProject.Service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    private void deleteStudent(@PathVariable("id") String id){
        ownerService.deleteOwner(id);
    }

    @RequestMapping("/search/{id}") //search an owner by id
    private Owner getStudents(@PathVariable(name = "id") String owner_id){
        return ownerService.getOwnerId(owner_id);
    }

    @RequestMapping("/search_job_listing/{id}") // search a job listing by owner id
    private List<Job> getJobListing(@PathVariable(name = "id") String owner_id){
        return ownerService.getJobListing(owner_id);
    }

}
