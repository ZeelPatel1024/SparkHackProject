package com.example.SparkHackProject.Controller;

import com.example.SparkHackProject.Model.Business;
import com.example.SparkHackProject.Model.Job;
import com.example.SparkHackProject.Service.BusinessService;
import com.example.SparkHackProject.Service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*") //Needed to connect to frontend application
@RequestMapping("api/v1/business")
public class BusinessController {
    @Autowired
    private BusinessService businessService;

    @Autowired
    public BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }

    @PostMapping(value="/save") // Save owner
    public String saveBusiness(@RequestBody Business business){
        businessService.saveOrUpdate(business);
        return business.getId();
    }

    @GetMapping(value="/getAll") // get all jobs
    private Iterable<Business> getBusinesses(){
        return businessService.listAll();
    }

    @PutMapping(value="/edit/{id}") //edit owners
    private Business update(@RequestBody Business business, @PathVariable(name="id") String id){
        business.setId(id);
        businessService.saveOrUpdate(business);
        return business;
    }

    @DeleteMapping("/delete/{id}") //delete owner by id
    private void deleteBusiness(@PathVariable("id") String id){
        businessService.deleteBusiness(id);
    }

    @RequestMapping("/search/{id}") //search an owner by id
    private Business getBusiness(@PathVariable(name = "id") String business_id){
        return businessService.getBusinessId(business_id);
    }

}
