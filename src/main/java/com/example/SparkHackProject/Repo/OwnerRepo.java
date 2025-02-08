package com.example.SparkHackProject.Repo;

import com.example.SparkHackProject.Model.Owner;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface OwnerRepo extends MongoRepository<Owner, String> {
    Optional<Owner> findByEmail(String email);
}
