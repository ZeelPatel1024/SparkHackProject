package com.example.SparkHackProject.Repo;

import com.example.SparkHackProject.Model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepo extends MongoRepository<Job, String> {
}
