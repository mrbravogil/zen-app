package com.example.zen_app_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.zen_app_backend.model.Quote;

import java.util.List;

@Repository
public interface QuoteRepository extends JpaRepository<Quote, Long> {
    
    // Método personalizado: buscar frases por id de categoría
	List<Quote> findByCategoryId(Long categoryId);
}
