package com.example.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")  // Allow requests from your frontend URL
public class ProductController {

    @GetMapping
    public List<Map<String, Object>> getProducts() {
        return Arrays.asList(
                Map.of("id", 1, "name", "Apple", "price", 10),
                Map.of("id", 2, "name", "Orange", "price", 20),
                Map.of("id", 3, "name", "Banana", "price", 30)
        );
    }
}
