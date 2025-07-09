package com.example.zen_app_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.zen_app_backend.model.Quote;
import com.example.zen_app_backend.repository.QuoteRepository;

import java.util.List;

@RestController
@RequestMapping("/api/quotes")
@CrossOrigin(origins = "http://localhost:4200")  // Esto permite que Angular consuma la API en desarrollo
public class QuoteController {

    @Autowired
    private QuoteRepository quoteRepository;

    @GetMapping
    public List<Quote> obtenerTodasLasQuotes() {
        return quoteRepository.findAll();
    }
    
    @GetMapping("/category/{categoryId}")
    public List<Quote> obtenerQuotesPorCategoria(@PathVariable Long categoryId) {
        return quoteRepository.findByCategoryId(categoryId);
    }
}
