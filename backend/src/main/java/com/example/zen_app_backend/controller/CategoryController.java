package com.example.zen_app_backend.controller;

import com.example.zen_app_backend.model.Category;
import com.example.zen_app_backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping
    public List<Category> obtenerTodasLasCategorias() {
        return categoryRepository.findAll();
    }
}
