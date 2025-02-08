package com.example.SparkHackProject.Controller;

import com.example.SparkHackProject.Model.Job;
import com.example.SparkHackProject.Model.Owner;
import com.example.SparkHackProject.Service.JobService;
import com.example.SparkHackProject.Service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*") //Needed to connect to frontend application
@RequestMapping("api/v1/job")
public class JobController {
    @Autowired
    private JobService jobService;

    @PostMapping(value="/save") // Save owner
    public String saveJob(@RequestBody Job job){
        jobService.saveOrUpdate(job);
        return job.getId();
    }

    @GetMapping(value="/getAll") // get all jobs
    private Iterable<Job> getJobs(){
        return jobService.listAll();
    }

    @PutMapping(value="/edit/{id}") //edit owners
    private Job update(@RequestBody Job job, @PathVariable(name="id") String id){
        job.setId(id);
        jobService.saveOrUpdate(job);
        return job;
    }

    @DeleteMapping("/delete/{id}") //delete owner by id
    private void deleteJob(@PathVariable("id") String id){
        jobService.deleteJob(id);
    }

    @RequestMapping("/search/{id}") //search an owner by id
    private Job getJob(@PathVariable(name = "id") String job_id){
        return jobService.getJobId(job_id);
    }

}
