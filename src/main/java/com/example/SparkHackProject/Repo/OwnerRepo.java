package com.example.SparkHackProject.Repo;

import com.example.SparkHackProject.Model.Owner;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OwnerRepo extends MongoRepository<Owner, String> {
}
