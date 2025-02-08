package com.example.SparkHackProject.Repo;

import com.example.SparkHackProject.Model.Business;
import com.example.SparkHackProject.Model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BusinessRepo extends MongoRepository<Business, String> {
}
