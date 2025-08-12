package com.example.zen_app_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ZenAppBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZenAppBackendApplication.class, args);
		System.out.println("DATABASE_URL: " + System.getenv("DATABASE_URL"));

	}

}
