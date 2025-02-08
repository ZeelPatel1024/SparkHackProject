package com.example.SparkHackProject.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "jobs") //database has collections called students
public class Job {

    @Id
    private String id;

    private String name;

    private String description;

    private String image;

    private String ownerId;

    private Boolean available;

    public Job(String id, String name, String description, String image, String ownerId, Boolean available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.ownerId = ownerId;
        this.available = available;
    }

    @Override
    public String toString() {
        return "Job{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", ownerId='" + ownerId + '\'' +
                ", available=" + available +
                '}';
    }

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(String ownerId) {
        this.ownerId = ownerId;
    }
}
